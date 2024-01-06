<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;
use Illuminate\Database\QueryException;
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
    protected function isUnknownDatabaseException(QueryException $exception)
    {
        return $exception->getCode() == 1049; 
    }
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
                'Error' => $exception->getMessage(),
            ], 500);
        }

        if ($exception instanceof ValidationException) {
            $this->logException($exception);
            return response()->json([
                'Error' => $exception->getMessage(),
            ], 422);
        }
        if ($exception instanceof ModelNotFoundException) {
            $this->logException($exception);
            return response()->json([
                'Error' => $exception->getMessage(),
            ], 422);
        }
        if ($exception instanceof HttpException && $exception->getStatusCode() == 404) {
            return response()->json(['Error' => 'Not Found'], 404);
        }
        if ($exception instanceof QueryException && $this->isUnknownDatabaseException($exception)) {
            return response()->json(['Error'=>'Please run create_database_and_user.sql and migrations.'], 500);
        }

        return parent::render($request, $exception);
    }

    private function logException(Throwable $exception)
    {
        Log::error('Exception caught: ' . $exception->getMessage(), ['exception' => $exception]);
    }
}
