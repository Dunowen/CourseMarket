import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CustomModal.css';

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="small" onClick={this.open} >
                    {this.props.buttonText}
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.body}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};