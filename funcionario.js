document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star-icon");
    const negativeReasonDiv = document.getElementById("negative-reason");
    const submitButton = document.getElementById("submit-btn");
    const modal = document.getElementById("confirmation-modal");
    const closeModal = document.getElementById("close-modal");
    const professionSelect = document.getElementById("profession");
    const otherProfessionContainer = document.getElementById("other-profession-container");


    // Adiciona evento de clique para cada estrela
    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            // Marca todas as estrelas até a selecionada
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("ativo");
            }
            
            // Desmarca as estrelas à direita
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove("ativo");
            }

            // Exibe a pergunta do motivo apenas se a avaliação for negativa (1 ou 2 estrelas)
            if (index < 2) {
                negativeReasonDiv.style.display = "block";
            } else {
                negativeReasonDiv.style.display = "none";
            }
        });
    });

    professionSelect.addEventListener("change", function () {
        if (professionSelect.value === "outro") {
            otherProfessionContainer.style.display = "block"; // Exibe a caixa de texto
        } else {
            otherProfessionContainer.style.display = "none"; // Esconde a caixa de texto
        }
    });
    

    // Exibe o modal de confirmação ao enviar feedback
    submitButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Fecha o modal ao clicar no botão de fechar
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        window.location.href = "index.html";  // Redireciona para a página inicial (ajuste o nome da página conforme necessário)
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            window.location.href = "index.html";  // Redireciona para a página inicial (ajuste o nome da página conforme necessário)
        }
    });
});
