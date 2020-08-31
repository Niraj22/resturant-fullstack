import React, { Component } from 'react'
import { connect } from "react-redux";
import { GetCategories } from "../../../actions/categoriesAction";
import { PostItem } from "../../../actions/itemActions";
import { Button, Modal, ModalHeader, Form, FormGroup, FormText, Label, Input, ModalBody, } from 'reactstrap'
import { ButtonAdd } from '../common/common-button'

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        category: '',
        slug: '',
        homeDelivery: '',
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
    onFileChange = (event) => {
        let file = event.target.files[0]
        this.setState({ selectedImage: file })
    }
    renderOption = () => {
        const data = this.props.categories.items
        if (data) {
            return (
                data.map(el => {
                    return (
                        <>
                            <option key={el._id} value={el._id} onChange={this.onChange}>{el.category}</option>
                        </>
                    )
                })
            )
        }

    }
    onSubmit = (event) => {
        event.preventDefault()
        let file = this.state.selectedImage
        let formData = new FormData()
        formData.append('file', file)
        formData.append('name', this.state.name)
        formData.append('category', this.state.category)
        formData.append('slug', this.state.slug)
        formData.append('homeDelivery', this.state.homeDelivery)
        formData.append('takeOut', this.state.takeout)
        formData.append('price', this.state.price)
        this.props.PostItem(formData)
        this.toggle()
    }

    render() {
        return (
            <div>
                <ButtonAdd
                    onClick={this.toggle}
                >Add Item</ButtonAdd>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered
                >
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
                                    value={this.state.category}
                                    onChange={this.onChange}
                                >
                                    {this.renderOption()}
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
                                <Label for="homeDelivery">Home Delivery</Label>
                                <Input
                                    type="select"
                                    name="homeDelivery"
                                    id="homeDelivery"
                                    value={this.state.homeDelivery}
                                    onChange={this.onChange}
                                >
                                    <option value="false">False</option>
                                    <option value="true">True</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="takeout">Takeout</Label>
                                <Input
                                    type="select"
                                    name="takeout"
                                    id="takeout"
                                    value={this.state.takeout}
                                    onChange={this.onChange}
                                >
                                    <option value="false">False</option>
                                    <option value="true">True</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="slug">Description</Label>
                                <Input type="textarea" name="slug" id="slug" placeholder="Enter details" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="selectedImage">Image</Label>
                                <Input
                                    type="file"
                                    name="selectedImage"
                                    id="selectedImage"
                                    onChange={this.onFileChange}
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
export default connect(mapStateToProps, { GetCategories, PostItem })(ItemModal)