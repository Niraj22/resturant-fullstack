import React, { Component } from "react";
import { connect } from "react-redux";
import { GetCategories } from "../../actions/categoriesAction";
import Card from "../category-card/card";
import { Slogan, CategoryContainer } from "./categories.styles";
class Categories extends Component {
  componentDidMount() {
    this.props.GetCategories();
  }
  renderCards() {
    var data = this.props.categories
    if (data) {
      return data.map(el => {
        return (
          <Card Title={el.category} />
        )
      })
    }
  }
  render() {
    return (
      <>
        <Slogan>We Serve these categories</Slogan>
        <CategoryContainer>
          {this.renderCards()}
        </CategoryContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { categories: state.Categories[0] };
};
export default connect(mapStateToProps, { GetCategories })(
  Categories
);
