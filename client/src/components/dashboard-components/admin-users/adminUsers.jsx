import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetUsers, deleteUser } from '../../../actions/userActions'
import UserModal from '../user-modal/UserModal'
import { ContainerAll, HeadContainer, TextContainer, ListContainer, List, Category, Icon } from './adminUsers.styles'
import { MdDelete } from "react-icons/md";
class AdminUsers extends Component {
    componentDidMount() {
        this.props.GetUsers();
    }
    onDeleteClick = (id) => {
        this.props.deleteUser(id)
    }
    renderList = () => {
        if (this.props.isAuthenticated !== true) {
            this.props.history.push('/admin')
            return
        }
        if (this.props.users) {
            return (
                <ContainerAll>
                    <HeadContainer>
                        <TextContainer>List of Admin Users</TextContainer>
                        <UserModal />
                    </HeadContainer>
                    <ListContainer>
                        {
                            this.props.users.map(({ _id, email }) => (
                                <List key={_id}>
                                    <Category>{email}</Category>
                                    <Icon
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        <MdDelete onClick={this.onDeleteClick.bind(this, _id)} color="#40414d" size="2rem" />
                                    </Icon>
                                </List>
                            ))}
                    </ListContainer>
                </ContainerAll>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderList()}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default withRouter(connect(mapStateToProps, { GetUsers, deleteUser })(AdminUsers))