import companyLogo from '../../images/logo.png';
import linkedinLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';
import './index.css';
import { Link } from 'react-router-dom';


function App(props){
  return(
  <>  
  <header>
    
    <div>
      <img src={companyLogo} alt='Logo Loja' widht='50' height="50" />
    </div>
    
    <ul>
        <li>
            <p id='quemSomos'>Quem somos</p>
        </li>
        <li>
            <p>Contato</p>
        </li>
    </ul>
  
  </header>

  <body>
    
    <div class='corpoFormulario'>
      <div id='cabeçalho'>
        <h1 id='titulo'>Sua inscrição foi realizada com sucesso!</h1>
        <br/>
        <p id='subtitulo'>Fique de olho no seu e-mail!</p>
        <br/>
        <p> Estaremos selecionando as
        melhores vagas que tiverem match com o seu perfil.</p>
        <br/>
        <p>Não se esqueça de manter seus dados atualizados para aumentar as suas chances.</p>
        <br/> <br/> <br/> <br/> <br/>        
        <p>Time de recurtamento da JobsNet,</p>
      
      </div>
    </div>

    <div id='botaoVoltar'>
      <Link to='/'>
        <button type="button" id='voltar'>Voltar</button>
      </Link>
    </div> 

    <div className='rodape'>
    <div>
      <p>Desenvolvido por: Mateus Almeida</p>
    </div>
  
    <div>
      <a id='linkedin' href="https://www.linkedin.com/in/mateus-almeida-312a27129/">
      <img src={linkedinLogo} alt='Linkedin Logo'/>
      </a>
      <a id='github' href="https://github.com/mateusMBA/">
      <img src={githubLogo} alt='GitHub Logo'/>
      </a>
    </div>
    </div>

  </body>

  </>

  );
}

export default App;