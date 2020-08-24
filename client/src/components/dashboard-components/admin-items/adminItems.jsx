import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ContainerAll, HeadContainer, TextContainer } from '../common/common-header'
import { GetItems } from '../../../actions/itemActions'
import { connect } from 'react-redux'
import { ItemsContainer } from './adminItems.styles'
import CtaButton from '../../cta-buttons/buttons'
import ItemModal from '../item-modal/item'
import ItemCard from '../../item-card/ItemCard'
class AdminItems extends Component {
    componentDidMount() {
        this.props.GetItems()
    }
    pageHandler = () => {
        if (this.props.items) {
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

    }
    renderList = () => {
        if (this.props.isAuthenticated !== true) {
            this.props.history.push('/admin')
            return
        }

        if (this.props.items.items) {
            const data = this.props.items.items
            return (
                <ContainerAll>
                    <HeadContainer>
                        <TextContainer>Admin Items</TextContainer>
                        <ItemModal />
                    </HeadContainer>
                    <ItemsContainer>
                        {
                            data.map(el => (
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
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default withRouter(connect(mapStateToProps, { GetItems })(AdminItems))