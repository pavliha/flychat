<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Task;
use App\User;
use Illuminate\Http\Request;


Auth::routes();

Route::get('/logout', 'Auth\LoginController@logout');

Route::get("/","IndexController@index");
Route::resource("/home","HomeController");


Route::get('/api/messages', 'MessageController@allMessages');
