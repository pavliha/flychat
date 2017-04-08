import React from "react";
import Boot from "./Boot"
import MsgList from "./containers/List/MsgListContainer"
import AddMsg from "./containers/Form/AddMsgContainer"

import Echo from "laravel-echo"

window.Pusher = require("pusher-js")
require("styles/main.styl")

window.Echo = Echo
window.echo = new Echo({
    broadcaster: 'pusher',
    key: window.Laravel.PUSHER_KEY,
    cluster: 'eu',
    encrypted: true
});

Boot.renderReactFor(".js-MsgList", <MsgList/>)
Boot.renderReactFor(".js-AddMsg", <AddMsg/>)


