import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import msg from "../../actions/msg"
@connect(store => {
    return {
        msg: store.msg
    }
}, dispatch => {
    return {
        msgAction: bindActionCreators(msg, dispatch)
    }
})
class MsgListContainer extends React.Component {

    componentWillMount() {

        window.echo.channel("msg").listen("MessageSend",e=>{
            console.log(e)
            this.props.msgAction.get()
        })


    }

    render() {

        if (this.props.fetching)
            return <div>Loading...</div>

        const items = this.props.msg.data;

        if(items === "success"){
            return false
        }

        return <div>
            {items.map((item) => {

                return <div className="row no-gutters msg" key={item.id}>
                    <div className="col">
                        <div className="msg-col msg__username">{item.user.name}</div>
                        <div className="msg-col">{item.message}</div>
                    </div>
                    <div className="msg__time">14:52</div>
                </div>
            })}
        </div>
    }
}
MsgListContainer.propTypes = {}
export default MsgListContainer
