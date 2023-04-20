import { Component } from "react";

import { ContainerButton } from "../style";
import ModalComponent from "./modal-component";

interface Props {
    handleModalOpenClose: any;
    showModal: boolean;
    confirmClick: any;

}
interface State {

}



export default class ButtonComponent extends Component<Props, State>{
    render() {
        return (
            <ContainerButton>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.handleModalOpenClose}
                    

                >Click ME!
                </button>
           
                <ModalComponent
                    handleModalOpenClose={this.props.handleModalOpenClose}
                    showModal={this.props.showModal} 
                confirmClick={this.props.confirmClick}/>
            </ContainerButton>
        )
    }
}