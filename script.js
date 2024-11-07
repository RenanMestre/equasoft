document.addEventListener("DOMContentLoaded", function () {
  const estatisticasBtn = document.getElementById("EstatisticasBtn");
  const administradorBtn = document.getElementById("AdministradorBtn");
  const betaMessage = document.getElementById("betaMessage");

  // Função para mostrar a mensagem de indisponibilidade
  function showBetaMessage() {
      betaMessage.style.display = "block";
  }

  // Função para fechar a mensagem de indisponibilidade
  window.closeMessage = function () {
      betaMessage.style.display = "none";
  };
});
