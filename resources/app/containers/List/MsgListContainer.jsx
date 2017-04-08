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
        this.props.msgAction.get()
    }

    render() {
        if (this.props.fetching)
            return <div>Loading...</div>
        if (!this.props.msg.completed)
            return <div>Ошибка</div>

        const items = this.props.msg.data;

        if(items === "success"){
            return false
        }
        return <div className="panel">
            <table className="table">
                <tbody>
                {items.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.message}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>

    }
}
MsgListContainer.propTypes = {}
export default MsgListContainer
