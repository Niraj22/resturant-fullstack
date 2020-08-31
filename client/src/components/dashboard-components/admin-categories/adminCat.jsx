import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetCategories, deleteCategory } from "../../../actions/categoriesAction";
import CatModal from '../cat-modal/modal'
import DeleteModal from '../delete-confirm/delete-modal'
import { MdDelete } from "react-icons/md";
import Loader from '../../loader/loader'
import { LoadingContainer } from '../common/loadingContainer'
import { ContainerAll, HeadContainer, TextContainer } from '../common/common-header'
import { ListContainer, List, Category, Icon } from './adminCat.styles'
class AdminCat extends Component {
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
        this.props.GetCategories();
    }
    onDelete = () => {
        this.props.deleteCategory(this.state.deleteID)
        this.setState({ modalShow: false })
    }
    renderList = () => {
        if (this.props.categories.loading && this.props.isAuthenticated.isLoading) {
            return (
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            )
        }
        if (this.props.isAuthenticated.isAuthenticated !== true) {
            return (null)
        }
        else if (this.props.categories.items) {
            return (
                <ContainerAll>
                    <HeadContainer>
                        <TextContainer>Categories in Inventory</TextContainer>
                        <CatModal />
                    </HeadContainer>
                    <ListContainer>
                        {
                            this.props.categories.items.map(({ _id, category }) => (
                                <List key={_id}>
                                    <Category>{category}</Category>
                                    <Icon
                                        onClick={(e) => { this.handleShowModal(_id) }}
                                    >
                                        <MdDelete color="#40414d" size="2rem" />
                                    </Icon>
                                </List>
                            ))}
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
        categories: state.Categories,
        isAuthenticated: state.auth
    }
}
export default withRouter(connect(mapStateToProps, { GetCategories, deleteCategory })(AdminCat))