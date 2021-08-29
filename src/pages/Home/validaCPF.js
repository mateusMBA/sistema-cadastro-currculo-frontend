function validaCPF(cpf) {

  
  const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
  
  
  if (cpf.length !== 11 && !(cpf.match(regex) !== null && cpf.length === 14)){
    return false;
  }

  if (cpf.match(regex) != null){
    let aux = cpf.match(regex);
    let digitos = aux[0].split('-')[1];
    let numeros = '';
    for (let num of aux[0].split('-')[0].split('.')){
    numeros += num;
    }
    cpf = numeros + digitos
  }

  let numeros = cpf.substring(0,9);
  let digitos = cpf.substring(9);
  

  let soma = 0
  for(let i = 10; i > 1; i--) {
    soma += numeros.charAt(10 - i) * i;
  }
  
    
  let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);


  // Validação do primeiro dígito.
  if(resultado.toString() !== digitos.charAt(0)){
      return false;
  }

  soma = 0
  numeros = cpf.substring(0,10);

  for (var k = 11; k > 1; k--){
      soma += numeros.charAt(11 - k) * k;
  }

  resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);


  if(resultado.toString() !== digitos.charAt(1)){
    return false;
  }
  
  return true;
  }

  export default validaCPF;