let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'sElE_BfQ67s', // ID del video YouTube
        playerVars: {
            'autoplay': 0, // Non parte automaticamente
            'mute': 1 // Parte mutato
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const muteButton = document.getElementById("muteButton");
    const textContainer = document.querySelector(".text-container");

    startButton.addEventListener("click", function () {
        player.playVideo(); // Avvia il video
        player.unMute(); // Attiva il suono
        startButton.style.display = "none"; // Nasconde il pulsante di avvio
        muteButton.style.display = "flex"; // Mostra il pulsante mute

        // Aggiunge la classe 'visible' per far apparire il testo
        textContainer.classList.add("visible");
    });

    muteButton.addEventListener("click", function () {
        if (player.isMuted()) {
            player.unMute();
            muteButton.innerHTML = "🔊";
        } else {
            player.mute();
            muteButton.innerHTML = "🔇";
        }
    });
});
