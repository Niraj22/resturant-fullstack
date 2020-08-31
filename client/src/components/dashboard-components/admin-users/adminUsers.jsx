import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetUsers, deleteUser } from '../../../actions/userActions'
import UserModal from '../user-modal/UserModal'
import Loader from '../../loader/loader'
import { LoadingContainer } from '../common/loadingContainer'
import { ContainerAll, HeadContainer, TextContainer } from '../common/common-header'
import DeleteModal from '../delete-confirm/delete-modal'
import { ListContainer, List, Category, Icon } from './adminUsers.styles'
import { MdDelete } from "react-icons/md";
class AdminUsers extends Component {
    state = {
        deleteID: null,
        modalShow: false
    }
    handleShowModal = (id) => {
        this.setState({ modalShow: true, deleteID: id });
    }
    toggle = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    }
    handleCloseModal = () => {
        this.setState({ modalShow: false });
    }
    componentDidMount() {
        this.props.GetUsers();
    }
    onDelete = () => {
        this.props.deleteUser(this.state.deleteID)
        this.setState({ modalShow: false })
    }
    renderList = () => {
        if (this.props.isAuthenticated.isLoading) {
            return (
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            )

        }
        if (this.props.isAuthenticated.isAuthenticated !== true) {
            return (null)
        }
        else if (this.props.users) {
            return (
                <ContainerAll>
                    <HeadContainer>
                        <TextContainer>List of Admin Users</TextContainer>
                        <UserModal />
                    </HeadContainer>
                    <ListContainer>
                        {
                            this.props.users.map(({ _id, email }) => {
                                if (this.props.isAuthenticated.user._id !== _id) {
                                    return (<List key={_id}>
                                        <Category>{email}</Category>
                                        <Icon
                                            onClick={(e) => { this.handleShowModal(_id) }}
                                        >
                                            <MdDelete color="#40414d" size="2rem" />
                                        </Icon>
                                    </List>)
                                }
                            })}
                    </ListContainer>
                    <DeleteModal
                        toggle={this.toggle}
                        modalStatus={this.state.modalShow}
                        showModal={this.handleShowModal}
                        closeModal={this.handleCloseModal}
                        handleClick={this.onDelete}
                    />
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
        isAuthenticated: state.auth
    }
}
export default withRouter(connect(mapStateToProps, { GetUsers, deleteUser })(AdminUsers))