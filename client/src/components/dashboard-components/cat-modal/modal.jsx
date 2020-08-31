import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../../actions/categoriesAction'
import { Button, Modal, ModalHeader, Form, FormGroup, Label, Input, ModalBody } from 'reactstrap'
import { ButtonAdd } from '../common/common-button'

class CatModal extends Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
    onSubmit = (event) => {
        event.preventDefault()
        const newCategory = {
            category: this.state.name.toLowerCase()
        }
        //add item using add item actions
        this.props.addCategory(newCategory)
        //close the modal
        this.toggle()

    }
    render() {
        return (
            <div>
                <ButtonAdd
                    onClick={this.toggle}
                >Add category</ButtonAdd>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered>
                    <ModalHeader toggle={this.toggle}>
                        Add to Categories
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Category</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add a new category"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="light"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Add Category</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    categories: state.Categories
})
export default connect(mapStateToProps, { addCategory })(CatModal)