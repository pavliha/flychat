<?php

namespace App\Http\Controllers;

use App\User;
use Cache;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        return view('home',['users' => $this->onlineUsers()]);
    }

    public function onlineUsers(){

        $users_id = User::pluck('id')->toArray();
        $users_online = [];

        foreach ($users_id as $id){
            if(Cache::has('user-online'.$id)){
                $users_online[] = $id;
            }
        }

        return User::whereIn('id',$users_online)->get();
    }
}
