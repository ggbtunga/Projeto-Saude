// Exibir o popup ao carregar a página
window.addEventListener("load", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closePopup");

    // Ativar o popup
    popup.classList.add("active");

    // Fechar o popup ao clicar no botão
    closeButton.addEventListener("click", function () {
        popup.classList.remove("active");
    });
});


document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        const imc = (weight / (height * height)).toFixed(2);
        let classification = "";

        if (imc < 18.5) {
            classification = "Baixo peso";
        } else if (imc < 24.9) {
            classification = "Peso normal";
        } else if (imc < 29.9) {
            classification = "Excesso de peso";
        } else if (imc < 34.9) {
            classification = "Obesidade de Classe I";
        } else if (imc < 39.9) {
            classification = "Obesidade de Classe II";
        } else {
            classification = "Obesidade de Classe III";
        }

        document.getElementById("result").textContent = `Seu IMC é ${imc} (${classification})`;
    } else {
        document.getElementById("result").textContent = "Por favor, insira valores válidos.";
    }
});