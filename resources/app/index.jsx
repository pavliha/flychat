import React from "react";
import Boot from "./Boot"
import MsgList from "./containers/List/MsgListContainer"

require("styles/main.styl")


Boot.renderReactFor(".js-TaskList", <MsgList/>)


