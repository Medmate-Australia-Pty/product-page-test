<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'mohammad',
                'email' => 'mysaltern@gmail.com',
                'password' => Hash::make('$2y$10$8ucQH/dlPcZu47cXoq.DheDTO5UWrweDudN0HtAhwR675M5WuEhXK'),
                'remember_token' => '123',
                'created_at' => '2023-10-02 10:35:46',
                'updated_at' => '2023-10-02 10:35:46',
            ],
        ]);
    }
}
