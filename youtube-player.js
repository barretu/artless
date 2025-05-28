// 1. Carrega a API do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Variável global para o player
var player;

// 3. Função chamada quando a API estiver pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'Hjl6usm5WCo', // Substitua pelo ID do vídeo
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'mute': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. Quando o player estiver pronto
function onPlayerReady(event) {
    document.getElementById('play-button').addEventListener('click', function() {
        player.unMute();
        player.playVideo();
    });
}