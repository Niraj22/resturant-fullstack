import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container, Category, LinkMenu } from "./card.styles";
import { GiFruitBowl, GiManualJuicer, GiCoffeeCup } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { RiCake3Line } from "react-icons/ri";
import { IoMdBeer } from "react-icons/io";
export default class Card extends Component {
  renderList() {
    if (this.props.Title === "Appetizers") {
      return <GiFruitBowl size="12rem" />;
    }
    if (this.props.Title === "Breakfast") {
      return <GiCoffeeCup size="12rem" />;
    }
    if (this.props.Title === "Main-Menu") {
      return <MdRestaurantMenu size="12rem" />;
    }
    if (this.props.Title === "Dessert") {
      return <RiCake3Line size="12rem" />;
    }
    if (this.props.Title === "Special") {
      return <GiManualJuicer size="12rem" />;
    }
    if (this.props.Title === "Beverage") {
      return <IoMdBeer size="12rem" />;
    }
    else {
      return <MdRestaurantMenu size="12rem" />;
    }
  }
  render() {
    return (
      <Container>
        <Category>
          {this.renderList()}
          <LinkMenu to={this.props.Title}>{this.props.Title}</LinkMenu >
        </Category>
      </Container>
    );
  }
}
