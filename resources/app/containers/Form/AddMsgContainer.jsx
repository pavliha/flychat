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
class AddMsgContainer extends React.Component {

    componentWillMount() {
        this.props.msgAction.get()
    }

    render() {
        return <form className="layout-sendform">
            <input type="text" placeholder="Type message..." name="message" onKeyPress={this.sendMsgViaEnter.bind(this)}
                   autoFocus="true"/>
            <button className="btn btn-secondary" onClick={this.sendMsg.bind(this)}>Send</button>
        </form>

    }

    sendMsg(e) {
        e.preventDefault()
        this.props.msgAction.add(e.target.form)
        this.props.msgAction.get()
    }

    sendMsgViaEnter(e) {
        if (e.keyCode) {
            e.preventDefault()
            this.props.msgAction.add(e.target.form)
            if (!this.props.msg.fetching)
                this.props.msgAction.get()

        }

    }
}
AddMsgContainer.propTypes = {}
export default AddMsgContainer
