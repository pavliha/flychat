<?php

namespace App\Http\Controllers;

use App\Events\MessageSend;
use Illuminate\Http\Request;
use App\Message;

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

        $msg = Message::create([
            "message" => $request->input("message"),
            "user_id"=>\Auth::id()
        ]);
         broadcast(new MessageSend($msg));
//        return $msg->with('user')->get();
        return [];
    }
}
