import React from 'react';
import Rodal from 'rodal';
import './styles/App.css'
import 'rodal/lib/rodal.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  
  show() {
    this.setState({ 
      visible: true
    });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const customStyles = {
      width: "50%",
      bottom: 'auto',
      top: '30%',
      border_radius: "15px",
    }

    return (
      <div className="App">
        <div className='HomePageText'>
          <h5>Eu,</h5>
          <h1>Cauã Benigri,</h1>
          <h3>Sou desenvolvedor (e humano)...</h3>
        </div>
        <div className='MainImage'>
          <img src={require('./imgs/caua.jpeg')}  alt="Cauã Benigri" className='MainImageImg'/>
        </div>
        <div className='Content'>
          <button className='Contact' onClick={this.show.bind(this)}>Contate-me!</button>
          <Rodal className="Rodal" customStyles={customStyles} width="20%" visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div className='RodalCSS'>
              <div className='ContactOptions'>
                <h3>Social Media:</h3>
                <a href="https://instagram.com/cauabeisola" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/instagram.png')} alt="instagram" className='logo' /></a>
                <a href="https://wa.me/+5547991458053" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/whatsapp.png')} alt="whatsapp" className='logo' /></a>
                <a href="https://github.com/cauabeisola" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/github.png')} alt="github" className='logo' /></a>
                <a href="https://linkedin.com/in/cauã" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/linkedin.png')} alt="github" className='logo' /></a>
              </div>
            </div>
          </Rodal>
        </div>
      </div>
    );
  }
}

export default App