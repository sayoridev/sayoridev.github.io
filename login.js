document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let codiceInserito = document.getElementById("secret-code").value.trim();
    let codiceCorretto = "bXlsb3Zl"; 

    if (codiceInserito === codiceCorretto) {
        window.location.href = "letter/<3.html";
    } else {
        let errore = document.getElementById("error-message");
        errore.textContent = "Codice errato. Riprova.";
    }
});
