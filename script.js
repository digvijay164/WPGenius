// Select the video element
    const video = document.getElementById('background-video');

    // Add an event listener for scroll
    window.addEventListener('scroll', () => {
      // Calculate the scroll position as a percentage
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      // Map the scroll position to the video's duration
      video.currentTime = scrollPosition * video.duration;
    });

    // Pause the video initially
    video.pause();