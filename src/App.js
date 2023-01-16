import './styles/App.css'
import { React, useState } from 'react';
import Popup from 'reactjs-popup';

const curriculumVitae = require("./docs/curriculumVitae.pdf")
const certificate1 = require("./docs/certificado1.pdf")
const certificate2 = require("./docs/certificado2.pdf")

const App = () => {

  const [command, setCommand] = useState("")
  const [open, setOpen] = useState(false)
  const [commandPrompted, setCommandPrompted] = useState("")
  const [TerminalContent, setTerminalContent] = useState(["Comandos:", "help - Mostra esta mensagem", "cv - Mostra meu currículo", "certificates - Mostra meus certificados disponíveis", "clear - Limpa o terminal", "projects - Mostra projetos feito por Cauã Benigri", "langs - Cita as linguagens de programação conhecidas"])
  const closeModal = () => setOpen(false)

  async function CommandExecution(e){
    if(e.key == "Enter"){
      setTimeout(() => {
        e.target.value = ""
        if(command == "help"){
          setTerminalContent(["Comandos:", "help - Mostra esta mensagem", "cv - Mostra meu currículo", "certificates - Mostra meus certificados disponíveis", "clear - Limpa o terminal", "projects - Mostra projetos feito por Cauã Benigri", "langs - Cita as linguagens de programação conhecidas"])
          setCommandPrompted("help")
        }
        else if(command == "clear"){
          setTerminalContent([""])
        }
        else if(command == "projects"){
          setTerminalContent(["Projetos:", "https://cauabenigri.vercel.app", "https://github.com/cauabeisola/LoginPage", "https://github.com/cauabeisola/Projeto_Reverse_Shell", "https://github.com/cauabeisola/trab", "https://github.com/cauabeisola/Projetos-e-afins"])
          setCommandPrompted("projects")
        }
        else if(command == "langs"){
          setTerminalContent(["Cursos e linguagens:", "Desenvolvimento de sistemas - Curso técnico", "Python - 120 horas, 3 certificados (Python puro)", "C/C++ - Cursando (Udemy courses)", "JavaScript - Aprendendo"])
          setCommandPrompted("langs")
        }
        else if(command == "cv"){
          setTerminalContent([curriculumVitae])
          setCommandPrompted("cv")
        }
        else if(command == "certificates"){
          setTerminalContent([certificate1, certificate2])
          setCommandPrompted("certificates")
        }
        else{
          setTerminalContent(["Erro: Comando não encontrado!"])
        }
      }, 100)
      
    }
    
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
        <hr className="rounded"></hr>
        <div className='TerminalBox'>
          <div className='TerminalLog'>
            {    TerminalContent.map((item) => {
                  if(commandPrompted == "projects" && item != "Projetos:"){
                    return(
                          <a href={item} target="_blank" rel="noopener noreferrer" >{item}</a>
                    )
                    
                  }
                  else if(commandPrompted == "cv"){
                    return(
                      <a href={item} target="_blank" rel="noopener noreferrer" >Currículo.pdf</a>
                      )
                  }
                  else if(commandPrompted == "certificates"){
                    return(
                      <a href={item} target="_blank" rel="noopener noreferrer" >{item}</a>
                      )
                  }
                  else{
                  return(
                    <div>{item}</div>
                    )
                  }
                  
                })}
          </div>
          <hr className='TerminalSeparator'></hr>
          <input placeholder='Digite help para obter a lista de comandos' className='TerminalInput' onKeyDownCapture={CommandExecution} onChange={(e) => {
            setCommand(e.target.value)
          }}></input>
        </div>
      </div>
  )
}

export default App