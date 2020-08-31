import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ContainerAll, HeadContainer, TextContainer } from '../common/common-header'
import { GetItems } from '../../../actions/itemActions'
import { connect } from 'react-redux'
import { ItemsContainer } from './adminItems.styles'
import Loader from '../../loader/loader'
import { LoadingContainer } from '../common/loadingContainer'
import CtaButton from '../../cta-buttons/buttons'
import ItemModal from '../item-modal/item'
import ItemCard from '../../item-card/ItemCard'
class AdminItems extends Component {
    componentDidMount() {
        this.props.GetItems()
    }
    pageHandler = () => {
        const page = this.props.items.pagination
        if (page.next && page.prev) {
            return (
                <div>
                    <CtaButton style={{ marginRight: "2rem" }} onClick={() => {
                        this.props.GetItems(page.prev.page)
                    }}>Previous</CtaButton>
                    <CtaButton onClick={() => {
                        this.props.GetItems(page.next.page)
                    }}>Load More</CtaButton>
                </div>
            )
        }
        if (page.prev) {
            return (
                <CtaButton onClick={() => {
                    this.props.GetItems(page.prev.page)
                }}>Previous</CtaButton>
            )
        }
        else if (page.next) {
            return (
                <CtaButton onClick={() => {
                    this.props.GetItems(page.next.page)
                }}>Load More</CtaButton>
            )
        }
    }
    renderList = () => {
        if (this.props.items.loading && this.props.isAuthenticated.isLoading) {
            return (
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            )
        }
        if (this.props.isAuthenticated.isAuthenticated !== true) {
            return (null)
        }
        else if (this.props.items.items) {
            const { items } = this.props.items
            return (
                <ContainerAll>
                    <HeadContainer>
                        <TextContainer>Admin Items</TextContainer>
                        <ItemModal />
                    </HeadContainer>
                    <ItemsContainer>
                        {
                            items.map(el => (
                                <ItemCard key={el._id} data={el} />
                            ))
                        }
                    </ItemsContainer>
                    <div style={{ marginTop: "2rem" }}>
                        {this.pageHandler()}
                    </div>
                </ContainerAll>
            )

        }
        return null
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
        items: state.items,
        isAuthenticated: state.auth
    }
}
export default withRouter(connect(mapStateToProps, { GetItems })(AdminItems))