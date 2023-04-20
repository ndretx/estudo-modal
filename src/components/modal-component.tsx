import { Component } from "react";
import { Modal, Button } from "react-bootstrap";


interface Props {
    showModal: boolean
    handleModalOpenClose: any;
    confirmClick: any;

}

interface State {

}

export default class ModalComponent extends Component<Props, State>{
    render() {
    
        return (
            <div>
                <Modal show={this.props.showModal} >
                    <Modal.Header
                        onClick={this.props.handleModalOpenClose}
                        closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={this.props.handleModalOpenClose}
                            variant="secondary" >
                            Close
                        </Button>
                        <Button
                            onClick={() => {
                                this.props.handleModalOpenClose();
                                this.props.confirmClick();
                            }}
                            variant="primary" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}