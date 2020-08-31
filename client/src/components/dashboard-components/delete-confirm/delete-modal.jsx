import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
class DeleteModal extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.modalStatus} toggle={this.props.toggle} centered>
                    <ModalHeader toggle={this.toggle}>Delete the item</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete ?
                     </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.props.handleClick}>yes</Button>
                        <Button color="secondary" onClick={this.props.closeModal}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DeleteModal;