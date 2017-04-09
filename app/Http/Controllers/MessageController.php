<?php

namespace App\Http\Controllers;

use App\Events\MessageSend;
use App\Events\OnlineUsers;
use Cache;
use Illuminate\Http\Request;
use App\Message;
use Illuminate\Support\Facades\App;

class MessageController extends Controller
{
    public function __construct() {
        $this->middleware("auth");
    }

    public function index(){

        $messages = Message::with("user")->get();
        return $messages;
    }

    public function store(Request $request){


        $users_id = \App\User::pluck('id')->toArray();
        $users_online = [];

        foreach ($users_id as $id){
            if(Cache::has('user-online'.$id)){
                $users_online[] = $id;
            }
        }

        $users = \App\User::whereIn('id',$users_online);

        broadcast(new OnlineUsers($users));

        $msg = Message::create([
            "message" => $request->input("message"),
            "user_id"=>\Auth::id()
        ]);
         broadcast(new MessageSend($msg));
//        return $msg->with('user')->get();
        return $users;
    }
}
