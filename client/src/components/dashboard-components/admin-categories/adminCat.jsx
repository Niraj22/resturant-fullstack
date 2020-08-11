import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetCategories, deleteCategory } from "../../../actions/categoriesAction";
import CatModal from '../cat-modal/modal'
import { MdDelete } from "react-icons/md";
import { ContainerAll, HeadContainer, TextContainer, ListContainer, List, Category, Icon } from './adminCat.styles'
class AdminCat extends Component {
    componentDidMount() {
        this.props.GetCategories();
    }
    onDeleteClick = (id) => {
        this.props.deleteCategory(id)
    }
    renderList = () => {
        if (this.props.isAuthenticated !== true) {
            this.props.history.push('/admin')
            return
        }
        if (this.props.categories.items) {
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
        categories: state.Categories,
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default withRouter(connect(mapStateToProps, { GetCategories, deleteCategory })(AdminCat))