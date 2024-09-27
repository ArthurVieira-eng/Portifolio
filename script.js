document.addEventListener('DOMContentLoaded', function() {
// Mensagem de boas-vindas em forma de "alert" ao carregar a página.
    alert("Bem-vindo ao meu portfólio!");

// Parte responsável pelos link.
    const linkedinLink = document.getElementById("linkedin-link");
    const githubLink = document.getElementById("github-link");
//Parte criada para caso os links não sejam encontrados.
    if (linkedinLink) {
        linkedinLink.addEventListener('click', function(event) {
            event.preventDefault();
//Impede que o usuário seja direcionado automáticamente.
            alert("Você está prestes a ser redirecionado para o LinkedIn.");
            window.location.href = this.href;
        });
    } else {
        console.error("Elemento com ID 'linkedin-link' não encontrado.");
    }

    if (githubLink) {
        githubLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Você está prestes a ser redirecionado para o GitHub.");
            window.location.href = this.href;
        });
    } else {
        console.error("Elemento com ID 'github-link' não encontrado.");
    }
});
//Bloco responsável por gerenciar a mudança de estilos do site.
document.getElementById('theme-button').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';


    document.querySelectorAll('.colored-div').forEach(div => {
        div.style.color = 'black';
    });
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    });
});
//Bloco resposável por inverter mudanças feitas no bloco acima.
document.getElementById('themi-button').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'whitesmoke';

    
    document.querySelectorAll('.colored-div').forEach(div => {
        div.style.color = 'white'; 
    });
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'white'; 
    });
});