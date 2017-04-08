import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import msg from "../../actions/msg"

@connect(store => {
    return {
        cart: store.cart
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
        return <div className="card">
            <form>
                <input type="text" className="form-control" name="message"/>
                <button onClick={this.sendMsg.bind(this)}>Send</button>
            </form>
        </div>

    }

    sendMsg(e){
        e.preventDefault()
        this.props.msgAction.add(e.target.form)
    }

}
AddMsgContainer.propTypes = {}
export default AddMsgContainer
