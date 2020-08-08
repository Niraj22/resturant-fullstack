import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetCategories } from "../../../actions/categoriesAction";
import { MdDelete } from "react-icons/md";
import { ContainerAll, HeadContainer, ButtonAdd, TextContainer, listContainer, List, Category, Icon } from './adminCat.styles'
class AdminCat extends Component {
    componentDidMount() {
        this.props.GetCategories();
    }
    renderList = () => {
        if (this.props.categories) {
            return (
                <ContainerAll>
                    <HeadContainer>
                        <TextContainer>Categories in Inventory</TextContainer>
                        <ButtonAdd>Add category</ButtonAdd>
                    </HeadContainer>
                    <listContainer>
                        {
                            this.props.categories.map(({ _id, category }) => (
                                <List key={_id}>
                                    <Category>{category}</Category>
                                    <Icon>
                                        <MdDelete color="#40414d" size="2rem" />
                                    </Icon>
                                </List>
                            ))}
                    </listContainer>
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
    console.log(state)
    return {
        categories: state.Categories[0],
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, { GetCategories })(AdminCat)