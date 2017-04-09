<?php

namespace App\Http\Controllers;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Cache;

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
//        dd(Carbon::now()->timestamp);
//        $users_id = User::pluck('id')->toArray();
//        $users_online = [];
//
//        foreach ($users_id as $id){
//            if(Cache::has('user-online'.$id)){
//                $users_online[] = $id;
//            }
//        }

//        $users = User::whereIn('id',$users_online)->get();


        return view('home');
    }
}
