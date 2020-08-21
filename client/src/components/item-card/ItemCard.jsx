import React from 'react'
import { Container, Title, Description, Image, Stats, Topic } from './ItemCard.styles'
import { FaTimes, FaCheck, FaTags } from 'react-icons/fa'
export default function ItemCard(props) {
    const { name, filename, homeDelivery, slug, price, takeOut } = props.data
    return (
        <Container>
            <Image src={`api/items/image/${filename}`} ></Image>
            <Title>{name}</Title>
            <Description>{slug}</Description>
            <Stats>
                <Topic>
                    <FaTags fill="orange" style={{ marginRight: "5px" }} />Price {price}</Topic>
                <Topic>Home Delivery {homeDelivery ? <FaCheck fill="green" /> : <FaTimes fill="red" />}</Topic>
                <Topic>Take Out {takeOut ? <FaCheck fill="green" /> : <FaTimes fill="red" />}</Topic>
            </Stats>
        </Container>
    )
}