<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;
use App\Exceptions\CustomErrors;
use Illuminate\Support\Facades\Log;

class Handler extends ExceptionHandler
{
    protected $dontReport = [];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register()
    {
        //
    }

    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    public function render($request, Throwable $exception)
    {
        if ($exception instanceof CustomErrors) {
            $this->logException($exception);
            return response()->json([
                'message' => $exception->getMessage(),
            ], 500);
        }

        if ($exception instanceof ValidationException) {
            $this->logException($exception);
            return response()->json([
                'message' => $exception->getMessage(),
            ], 422);
        }

        return parent::render($request, $exception);
    }

    private function logException(Throwable $exception)
    {
        Log::error('Exception caught: ' . $exception->getMessage(), ['exception' => $exception]);
    }
}
