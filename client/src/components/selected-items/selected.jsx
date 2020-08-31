import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemCard from '../item-card/ItemCard'
import ls from 'local-storage';
import { ItemsContainer } from '../dashboard-components/admin-items/adminItems.styles'
import { ContainerAll } from '../dashboard-components/common/common-header'
import { GetItems } from '../../actions/selectedItemsActions'
import { LoadingContainer } from '../dashboard-components/common/loadingContainer'
import Loader from '../loader/loader'
import CtaButton from '../cta-buttons/buttons'
class Selected extends Component {
    componentDidMount() {
        const id = this.props.location.keyProp
        if (id !== undefined) {
            this.props.GetItems(id)
            this.setUp(id)
            return
        }
        this.props.GetItems(ls.get('catId'))
    }
    setUp = (id) => {
        ls.set('catId', id)
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
        if (this.props.items.loading) {
            return (
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            )
        }
        if (this.props.items.items) {
            const data = this.props.items.items
            return (
                <ContainerAll>
                    <ItemsContainer>
                        {
                            data.map(el => (
                                <ItemCard key={el._id} data={el} />
                            ))
                        }
                    </ItemsContainer>
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
        items: state.selectedMenu
    }
}
export default connect(mapStateToProps, { GetItems })(Selected)