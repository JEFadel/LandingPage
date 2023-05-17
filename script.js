// Gerar a conta aleatória
function gerarConta() {
  const num1 = Math.floor(Math.random() * 90); // Gera um número aleatório entre 10 e 89
  const num2 = Math.floor(Math.random() * 9) + 1; // Gera um número aleatório entre 1 e 9
  const resultado = num1 + num2; // Calcula o resultado da conta
  const contaLabel = document.getElementById("conta-label");
  contaLabel.innerHTML = `${num1} + ${num2} = ?`; // Exibe a conta na tela
  return resultado; // Retorna o resultado para ser comparado posteriormente
}

// Verificar se a resposta da conta está correta e habilitar o botão de envio
function verificarResposta() {
  const resultado = gerarConta();
  const respostaInput = document.getElementById("resposta-conta");
  const enviarBtn = document.getElementById("enviar-btn");
  respostaInput.value = ""; // Limpa o campo de resposta da conta
  respostaInput.addEventListener("input", function() {
    if (respostaInput.value == resultado) {
      enviarBtn.removeAttribute("disabled"); // Habilita o botão de envio
    } else {
      enviarBtn.setAttribute("disabled", true); // Desabilita o botão de envio
    }
  });
}

// Verificar se o campo de telefone está correto
function verificarTelefone() {
  const telefoneInput = document.getElementById("telefone");
  telefoneInput.addEventListener("input", function() {
    const telefoneRegex = /^\+?\d{0,2}\s?\(?\d{2,3}\)?\s?\d{0,1}?\s?\d{4}-?\s?\d{4}$/;
    if (telefoneRegex.test(telefoneInput.value)) {
      telefoneInput.setCustomValidity(""); // Remove a mensagem de erro
    } else {
      telefoneInput.setCustomValidity("Telefone inválido"); // Define a mensagem de erro
    }
  });
}

// Verificar se o campo de cidade está preenchido
function verificarCidade() {
  const cidadeInput = document.getElementById("cidade");
  cidadeInput.addEventListener("input", function() {
    if (cidadeInput.value.trim() === "") {
      cidadeInput.setCustomValidity("Informe a cidade"); // Define a mensagem de erro
    } else {
      cidadeInput.setCustomValidity(""); // Remove a mensagem de erro
    }
  });
}

// Verificar se o campo de e-mail está correto
function verificarEmail() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", function() {
    const emailRegex = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.setCustomValidity(""); // Remove a mensagem de erro
    } else {
      emailInput.setCustomValidity("E-mail inválido"); // Define a mensagem de erro
    }
  });
}

// Função principal que chama as outras funções quando o documento é carregado
document.addEventListener("DOMContentLoaded", function() {
  verificarTelefone();
  verificarCidade();
  verificarEmail();
  verificarResposta();
});

// Scroll para o formulário ao clicar no botão
function scrollToSection() {
  var section = document.getElementById("destiny");
  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// Reseta a página ao clicar na logo do header
const logo = document.getElementById('logo-header');
logo.addEventListener('click', () => {
  location.reload();
});

// Funcionalidade de adicionar background no header da página
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 80) {
    header.classList.add('background-header');
  } else {
    header.classList.remove('background-header');
  }
});

// NavBar para mobile

const menu = document.querySelector('#hambMenu');
const close = document.querySelector('.close');
const nav = document.querySelector('.header-nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-header-nav')
});

close.addEventListener('click', ()=> {
  nav.classList.remove('open-header-nav')
})