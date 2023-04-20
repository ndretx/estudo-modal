import logo from './logo.svg';
import ButtonComponent from './components/button-components';
import { Component } from 'react';
import { Container } from './style';



interface Props {
 

}
interface State {
  showModal: boolean
  confirmClick?:any
  
  
}


export default class App extends Component<Props, State> {

  state = {
    showModal: false,
    confirmClick: undefined
  };

  handleModalOpenClose = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  handleConfirmClick = () => {
    const {confirmClick} = this.state;
    this.setState({confirmClick})
  }
  





  render() {
    const { showModal } = this.state;
    const confirmClick = () => {
      console.log("Clicou em confirmar");
  }




    return (
      <div className="App">
        <Container>
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          
          

        </header>
        <ButtonComponent
            handleModalOpenClose={this.handleModalOpenClose}
            showModal={showModal}
            confirmClick={confirmClick}
            
            />
        </Container>
      </div>
    );
  }
}
