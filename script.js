function playAudio(audioId) {
  // Get the audio element
  const audioElement = document.getElementById(audioId);

  // Pause all other audio elements
  const otherAudioElements = document.querySelectorAll('audio:not(#'+audioId+')');
  for (const otherAudioElement of otherAudioElements) {
    otherAudioElement.pause();
    otherAudioElement.currentTime=0;
  }

  // Play the selected audio element
  audioElement.play();
}
