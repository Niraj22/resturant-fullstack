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
                        <CtaButton to="/">Load More</CtaButton>
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