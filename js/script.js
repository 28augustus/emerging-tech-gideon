// Bronvermelding: Chatgpt
// De "HACKED" tekst direct tonen wanneer de pagina wordt geladen
window.onload = function () {
  const hackedText = document.querySelector("#hacked-text");
  hackedText.style.display = "block"; // Toont de 'HACKED' tekst direct
};

// Voeg klik-functionaliteit toe om de 'HACKED' tekst te verwijderen
document.querySelector("#hacked-text").addEventListener("click", function () {
  this.style.display = "none"; // Verbergt de 'HACKED' tekst wanneer erop geklikt wordt
});
