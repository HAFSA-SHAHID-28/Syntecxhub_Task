(function () {
    emailjs.init("ca3fqCl7wj7rxfhJ_"); 
  })();
  

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const status = document.getElementById("form-status");
    const btn = this.querySelector("button");
  
    btn.disabled = true;
    btn.innerText = "Sending...";
  
    emailjs.sendForm(
      "service_w6tihkm",         
      "template_ivjqd58",        
      this
    ).then(
      () => {
        status.innerText = "Message sent successfully. I’ll get back to you soon.";
        status.style.color = "#2ecc71";
        this.reset();
        btn.disabled = false;
        btn.innerText = "Send Message";
      },
      (error) => {
        status.innerText = "Failed to send message. Please try again.";
        status.style.color = "#e74c3c";
        btn.disabled = false;
        btn.innerText = "Send Message";
        console.error(error);
      }
    );
  });
  
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navlinks");
  
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
