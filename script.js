function playAudio(audioId) {
    // Pause all audio elements
    document.getElementById('Document1').pause();
    document.getElementById('Document2').pause();
    document.getElementById('Document3').pause();

    
    // Play the selected audio
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
        audioElement.play();
    }
    
}
