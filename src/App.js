import './styles/App.css'
import { React, useState } from 'react';
import Popup from 'reactjs-popup';

const App = () => {

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

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
          <button className='Contact' onClick={() => setOpen(o => !o)}>Contate-me!</button>
            <Popup className="Modal" open={open} closeOnDocumentClick onClose={closeModal}>
            <a className="close" onClick={closeModal}>
              &times;
            </a>
              <div className='RodalCSS'>
                <div className='ContactOptions'>
                  <h3>Social Media:</h3>
                  <a href="https://instagram.com/cauabeisola" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/instagram.png')} alt="instagram" className='logo' /></a>
                  <a href="https://wa.me/+5547991458053" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/whatsapp.png')} alt="whatsapp" className='logo' /></a>
                  <a href="https://github.com/cauabeisola" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/github.png')} alt="github" className='logo' /></a>
                  <a href="https://linkedin.com/in/cauã" target="_blank" rel="noopener noreferrer"><img src={require('./imgs/linkedin.png')} alt="github" className='logo' /></a>
                </div>
              </div>
            </Popup>
        </div>
        <hr class="rounded"></hr>
        <div className='Terminal'>
          <h1 className='Nickname anim-typewriter'>Cauabeisola</h1>
        </div>
        <hr class="rounded"></hr>
        <h5 className='Sophia'>"O mundo observado é apenas uma aparência; na realidade, nem sequer existe." ~Erwin Schrodinger</h5>
      </div>
  )
}

export default App