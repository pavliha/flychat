import React from "react";
import Boot from "./Boot"
import MsgList from "./containers/List/MsgListContainer"
import AddMsg from "./containers/Form/AddMsgContainer"

import Echo from "laravel-echo"

window.Pusher = require("pusher-js")
require("styles/main.styl")
/*
	|----------------------------|
	| Make a database connection |
	|----------------------------|
	*/

 window.DB = new Dexie('MyDatabase');

// Define a schema
window.DB.version(1).stores({
    friends: 'name, age'
});


// Open the database
window.DB.open().catch((error)=> {
    alert('Uh oh : ' + error);
});

try{
if (window.io) {
    window.Echo = Echo
    window.echo = new Echo({
        broadcaster: 'socket.io',
        host: window.location.hostname + ':6001'
    });
}
}catch (e){
    console.warn("Socket does not work",e)
}


Boot.renderReactFor(".js-MsgList", <MsgList/>)
Boot.renderReactFor(".js-AddMsg", <AddMsg/>)


