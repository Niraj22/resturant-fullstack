import React, { Component } from 'react'
import { connect } from "react-redux";
import { GetCategories } from "../../../actions/categoriesAction";
import { Button, Modal, ModalHeader, Form, FormGroup, FormText, Label, Input, ModalBody, } from 'reactstrap'
import { ButtonAdd } from '../common/common-button'

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        category: '',
        slug: '',
        takeout: '',
        price: '',
        selectedImage: null
    }
    componentDidMount() {
        this.props.GetCategories();
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
    onSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            name: this.state.name,
            category: this.state.category,
            slug: this.state.category,
            takeout: this.state.takeout,
            price: this.state.price,
            selectedImage: this.state.selectedImage
        }
        //close the modal
        console.log(newItem)
        this.toggle()

    }
    renderCat = () => {
        const data = this.props.categories.items
        if (data) {
            return (
                <h1> {data.category}</h1>
            )
        }
    }
    render() {


        return (
            <div>
                <ButtonAdd
                    onClick={this.toggle}
                >Add Item</ButtonAdd>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To List Of Admin Users
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="add item name"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Category</Label>
                                <Input
                                    type="select"
                                    name="category"
                                    id="category"
                                    placeholder="Select"
                                    onChange={this.onChange}
                                >
                                    <option value="wedding">Wedding</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="event">Event</option>
                                    <option value="family">Family</option>
                                    <option value="potriat">Potriat</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Add price"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="takeout">Takeout</Label>
                                <Input
                                    type="text"
                                    name="takeout"
                                    id="takeout"
                                    placeholder="Add true or false"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="slug">Slug</Label>
                                <Input type="textarea" name="slug" id="slug" placeholder="Enter details" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="selectedImage">Image</Label>
                                <Input
                                    type="file"
                                    name="selectedImage"
                                    id="selectedImage"
                                    onChange={this.onChange}
                                />
                                <FormText color="muted">
                                    Upload image for the item.
                                 </FormText>
                            </FormGroup>
                            <Button
                                color="light"
                                style={{ marginTop: '2rem' }}
                                block
                            >Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.Categories,
    }
}
export default connect(mapStateToProps, { GetCategories })(ItemModal)