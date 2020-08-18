import React, { Component } from 'react'
import { ContainerAll, HeadContainer, TextContainer } from '../common/common-header'
import ItemModal from '../item-modal/item'
export default class AdminItems extends Component {
    render() {
        return (
            <ContainerAll>
                <HeadContainer>
                    <TextContainer>Admin Items</TextContainer>
                    <ItemModal />
                </HeadContainer>
            </ContainerAll>
        )
    }
}
