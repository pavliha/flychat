<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessageController extends Controller
{
    public function allMessages(){

        $messages = Message::with("user")->get();
        return $messages;
    }
}
