import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import user from "../../actions/user"

@connect(store => {
    return {
        user: store.user
    }
}, dispatch => {
    return {
        userAction: bindActionCreators(user, dispatch)
    }
})
class UserListContainer extends React.Component {

    componentWillMount() {
        try {
            if (io) {
                window.echo.channel("online-users").listen("OnlineUsers", e => {
                    this.props.userAction.get()
                })
            }
        } catch (e) {
            console.warn("Socket does not work", e)
        }


        this.props.userAction.get()

    }

    render() {
        if (this.props.fetching)
            return <div>Loading...</div>

        const items = this.props.user.data;

        return <ul>
            {items.map(user => {

                return <li className="user-list__item">
                    <a href="#" className="user-list__user">{user.name}</a>
                </li>

            })}

        </ul>
    }
}
UserListContainer.propTypes = {}
export default UserListContainer
