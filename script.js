// JavaScript to handle fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const handleScroll = () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !el.classList.contains("visible")) {
          el.classList.add("visible");
        }
      });
    };
  
    // Trigger on scroll and initial load
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on page load
  });
  