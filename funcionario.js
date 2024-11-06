document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star-icon");
    const negativeReasonDiv = document.getElementById("negative-reason");  // A nova pergunta
    const reasonTextarea = document.getElementById("reason");  // O campo de texto para o motivo
    const submitButton = document.getElementById("submit-btn");  // Botão de Enviar
    const modal = document.getElementById("confirmation-modal");  // Modal
    const closeModal = document.getElementById("close-modal");  // Botão de fechar modal
  
    // Adiciona evento de clique para cada estrela
    stars.forEach((star, index) => {
      star.addEventListener("click", function () {
        // Marca todas as estrelas à esquerda (inclusive a estrela selecionada)
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("selected");
        }
  
        // Desmarca as estrelas à direita
        for (let i = index + 1; i < stars.length; i++) {
          stars[i].classList.remove("selected");
        }
  
        // Exibe a pergunta do motivo apenas se a avaliação for negativa
        if (index < 2) { // Se a avaliação for 1 ou 2 estrelas (menos de 3)
          negativeReasonDiv.style.display = "block";  // Exibe a div com a pergunta
        } else {
          negativeReasonDiv.style.display = "none";  // Oculta a div com a pergunta
        }
      });
    });
  
    // Lógica para exibir o modal quando o botão de enviar for clicado
    submitButton.addEventListener("click", function () {
      // Exibe o modal
      modal.style.display = "block";
    });
  
    // Lógica para fechar o modal e redirecionar para a tela inicial
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
      // Redireciona o usuário para a tela inicial
      window.location.href = "index.html";  // Substitua "index.html" pelo nome correto da sua página inicial
    });
  
    // Fechar o modal quando o usuário clicar fora dele
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        // Redireciona o usuário para a tela inicial
        window.location.href = "index.html";  // Substitua "index.html" pelo nome correto da sua página inicial
      }
    });
  });
  