import React, { Component } from "react";
import { connect } from "react-redux";
import { GetCategories } from "../../actions/categoriesAction";
import Card from "../category-card/card";
import { LoadingContainer } from '../dashboard-components/common/loadingContainer'
import Loader from '../loader/loader'
import { Slogan, CategoryContainer } from "./categories.styles";
class Categories extends Component {
  componentDidMount() {
    this.props.GetCategories();
  }
  renderCards() {
    if (this.props.categories.loading) {
      return (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )
    }
    var data = this.props.categories.items
    if (data) {
      return data.map(el => {
        return (
          <Card key={el._id} Title={el.category} catKey={el._id} />
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
  return { categories: state.Categories };
};
export default connect(mapStateToProps, { GetCategories })(
  Categories
);
