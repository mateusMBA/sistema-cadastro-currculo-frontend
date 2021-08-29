import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import validaCPF from './validaCPF';
import './index.css';
import companyLogo from '../../images/logo.png';
import linkedinLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';

function App(props){

  const [form, setForm] = useState({
    nome: '',
    profissao: '', 
    cargo_desejado: '',
    data_nascimento : '',
    estado_civil : '', 
    genero : '', 
    cep : '',
    logradouro : '',
    numero : '',
    complemento : '',  
    bairro :  '', 
    cidade : '',
    estado : '',
    celular : '', 
    telefone : '', 
    email : '',
    identidade : '',
    cpf : '',
    veiculo : false,
    habilitacao : '',
  });

  const history = useHistory();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const user = await axios.post('https://apicadastrocurriculo.herokuapp.com/register', form)
      console.log(user)
      if(user.status === 200){
        history.push('./cadastrado')

       }  
    }
    catch {
      alert('CPF já cadastrado');
      setForm({...form, cpf: ''});
  }};

  function handleCep(){
    axios.get(`https://viacep.com.br/ws/${form.cep}/json/`)
    .then((resonse) => {
      setForm({ ...form,
        cep: resonse.data.cep,
        logradouro: resonse.data.logradouro,
        complemento: resonse.data.complemento,
        bairro: resonse.data.bairro,
        cidade: resonse.data.localidade,
        estado: resonse.data.uf
        });
    }).catch((err) =>{
      if (err){
        alert('CEP invalido');
        setForm({ ...form, cep: ''});
      }
    })
  }

  function handleCPF(){
    if(!(validaCPF(form.cpf))){
      setForm({...form, cpf : ''})
      alert('CPF inválido.')
    
  }}
  
  return (

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

    <form class='corpoFormulario' onSubmit={handleSubmit}>

      <div id='cabeçalho'>
        <h1 id='titulo'>Cadastro de Currículos</h1>
        <br/>
        <p id='subtitulo'>Preencha suas informações nos campos a seguir e envie para o nosso banco
          de talentos!</p>
        <br/>
        <p>Não se esquecer de utilizar seus dados atualizados, entraremos em contato com uma vaga
          a qualquer momento :</p>
          <br/>
        <p>O campos com * são obrigatórios.</p>
      </div>
      
      <div className='titulo' id='dadosPessoais'>
        <p>Dados Pessoais</p>
      </div>
      <hr/>
      
      <fieldset className='linha'>
        <div id='nome'>
          <label><b>Nome Completo *</b></label>
          <br/>
          <input id='inputNome' type='text' value={form.nome}
          onChange={e => setForm({...form, nome: e.target.value})} required/>
        </div>
      </fieldset>
      <fieldset className="linha"> 
        <div id='profissao'>
          <label><b>Profissão</b></label>
          <br/>
          <input id='inputProfissao' type='text' value={form.profissao}
          onChange={e => setForm({...form, profissao: e.target.value})} required/>
        </div>
        <div id='cargo'>
          <label><b>Cargo Desejado</b></label>
          <br/>
          <input id='inputCargo' type='text' value={form.cargo_desejado}
          onChange={e => setForm({...form, cargo_desejado: e.target.value})} />
        </div>
      </fieldset>

      <fieldset className='linha'>
        <div id='nascimento'>
          <label><b>Data de Nascimento</b></label>
          <br/>
          <input type='date' id='dataNascimento' value={form.data_nascimento}
          onChange={e => setForm({...form, data_nascimento: e.target.value})} required/>
        </div>

        <div>
          <label><b>Estado Civil</b></label>
          <br/>
          <select id='estadoCivil'value={form.estado_civil}
          onChange={e => setForm({...form, estado_civil: e.target.value})}>
            <option defaultValue disabled value=''>Selecione</option>
            <option value='Solteira(a)'>Solteiro(a)</option>
            <option value='Casado(a)'>Casado(a)</option>
            <option value='Divorciado(a)'>Divorciado(a)</option>
            <option value='Viúvo(a)'>Viúvo(a)</option>
          </select>
        </div>
        <div>
          <label><b>Gênero</b></label>
          <br/>
          <select id='genero'value={form.genero}
          onChange={e => setForm({...form, genero: e.target.value})}>
            <option defaultValue disabled value=''>Selecione</option>
            <option value='Feminino'>Feminino</option>
            <option value='Masculino'>Masculino</option>
            <option value='Outro'>Outro</option>
            <option value='Prefiro não dizer'>Prefiro não dizer</option>
          </select>
        </div>
      </fieldset>
      
      <fieldset className='linha'>
        <div id='cep'>
          <label><b>Cep</b></label>
          <br/>
          <input type='text'id='inputCep' value={form.cep} onBlur={handleCep}
          onChange={e => setForm({...form, cep: e.target.value})}  placeholder=" _____-___" required/>
        </div>
      </fieldset>

      <fieldset className='linha'>
        <div id='logradouro'>
          <label><b>Logradouro</b></label>
          <br/>
          <input type='text' id='inputLogradouro' value={form.logradouro}
          onChange={e => setForm({...form, logradouro: e.target.value})} required />
        </div>
        <div id='numero'>
          <label><b>Número</b></label>
          <br/>
          <input type='text' id='inputNumero' value={form.numero}
          onChange={e => setForm({...form, numero: e.target.value})} required />
        </div>
        <div id='complemento'>
          <label><b>Complemento</b></label>
          <br/>
          <input type='text' id='inputComplemento' value={form.complemento} 
          onChange={e => setForm({...form, complemento: e.target.value})} />
        </div>
      </fieldset>
      <fieldset className="linha">
        <div id='bairro'>
          <label><b>Bairro</b></label>
          <br/>
          <input type='text' id='inputBairro' value={form.bairro} 
          onChange={e => setForm({...form, bairro: e.target.value})} required />
        </div>
        <div id='cidade'>
          <label><b>Cidade</b></label>
          <br/>
          <input type='text' id='inputCidade' value={form.cidade}
          onChange={e => setForm({...form, cidade: e.target.value})} required />
        </div>

      <div id='estado'>
        <label><b>Estado</b></label>
        <br/>
        <input type='text' id='inputEstado' value={form.estado}
        onChange={e => setForm({...form, estado: e.target.value})} />
      </div>
      </fieldset>


      <fieldset className='linha'>
        <div id='celular'>
          <label><b>Celular</b></label>
          <br/>
          <input type='text' id='inputCelular' value={form.celular}
          onChange={e => setForm({...form, celular: e.target.value})} required/>
        </div>
        <div id='telefone'>
          <label><b>Telefone</b></label>
          <br/>
          <input type='text' id='inpuTel' value={form.telefone} 
          onChange={e => setForm({...form, telefone: e.target.value})} />
        </div>
        <div id='email'>
          <label><b>E-mail</b></label>
          <br/>
          <input type='email' id='inputEmail' placeholder="usuario@email.com"
          value={form.email} onChange={e => setForm({...form, email: e.target.value})}  required/>
        </div>
      </fieldset>

      <div className='titulo' id='documentos'>
        <p>Documentos</p>
      </div>
      <hr/>
      
      <fieldset className='linha'>
        <div id='identidade'>
          <label><b>Identidade</b></label>
          <br/>
          <input type='text' id='inputId' value={form.identidade} 
          onChange={e => setForm({...form, identidade: e.target.value})} />
          
        </div>
        <div id='cpf'>
          <label><b>CPF</b></label>
          <br/>
          <input type='text' onBlur={handleCPF} id='inputCPF' value={form.cpf} 
          onChange={e => setForm({...form, cpf: e.target.value})} placeholder=' ___.___.___-__' required />
        </div>

        <div id='veiculo'>
          <label><b>Possui Veículo</b></label>
          <br/>
          <label>
            <input type="radio" name="veiculo"  value={form.veiculo} 
            onChange={e => setForm({...form, veiculo: false})} defaultChecked/>Não
          </label>
          <label>
              <input type="radio" name="veiculo" 
              onChange={e => setForm({...form, veiculo: true})} />Sim
          </label>
        </div>
        <div id='habilitacao'>
          <label><b>Habilitação</b></label>
          <br/>
          <select value={form.habilitacao} 
          onChange={e => setForm({...form, habilitacao: e.target.value})}>
            <option defaultValue disabled value="">Selecione</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='Nenhuma'>Nenhuma</option>
          </select>
        </div>
      </fieldset>

      <div id='botaoRegistro'>
      <button type="submit" id='registro'>Enviar</button>
      </div> 

    </form>

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