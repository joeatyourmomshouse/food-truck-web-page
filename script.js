// Add event listener to window for scroll events
window.addEventListener('wheel', function(event) {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    
    // Check if the user is at the top or bottom of the page
    if (scrollPosition === 0 && event.deltaY < 0) {
      // If the user is at the top and scrolling up, allow them to scroll past it
      window.scrollTo({
        top: 10, // Allow them to scroll past the top (slightly offset)
        behavior: 'smooth'
      });
    } 
    else if (scrollPosition + viewportHeight >= documentHeight && event.deltaY > 0) {
      // If the user is at the bottom and scrolling down, allow them to scroll past it
      window.scrollTo({
        top: documentHeight - viewportHeight - 10, // Scroll slightly past the bottom
        behavior: 'smooth'
      });
    }
  });
  