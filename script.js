// Select the toggler and menu
const toggler = document.querySelector('.custom-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

// Toggle active class for hamburger
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  navbarCollapse.classList.toggle('show');
});
  

// Example: Smooth scrolling when clicking navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

/* Role Script */
  const roles = ["Java Developer", "Web Developer", "Frontend Developer", "Integration Developer"];
  let currentRole = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100; 
  const erasingSpeed = 50;
  const delayBetween = 1500; 
  const typingText = document.querySelector(".typing-text");
  
  function type() {
    const current = roles[currentRole];
    
    if (isDeleting) {
      typingText.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, erasingSpeed);
      }
    } else {
      typingText.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);


//Skill section

document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const percent = parseInt(entry.target.querySelector(".number").textContent);
          let degree = (percent / 100) * 360;
          entry.target.querySelector(".outer").style.setProperty("--degree", degree + "deg");
        }
      });
    });
  
    skillCards.forEach((card) => observer.observe(card));
  });

// Footer
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


  