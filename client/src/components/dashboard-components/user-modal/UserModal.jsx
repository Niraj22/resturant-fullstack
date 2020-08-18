import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../../actions/userActions'
import { Button, Modal, ModalHeader, Form, FormGroup, Label, Input, ModalBody } from 'reactstrap'
import { ButtonAdd } from '../common/common-button'

class UserModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
    onSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email.toLowerCase(),
            password: this.state.password
        }
        //close the modal
        this.props.addUser(newUser)
        this.toggle()

    }
    render() {
        return (
            <div>
                <ButtonAdd
                    onClick={this.toggle}
                >Add user</ButtonAdd>
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
                                    placeholder="Add name"
                                    onChange={this.onChange}
                                />
                                <Label for="email">Username</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Add username"
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Add password"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="light"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Add User</Button>
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
export default connect(mapStateToProps, { addUser })(UserModal)