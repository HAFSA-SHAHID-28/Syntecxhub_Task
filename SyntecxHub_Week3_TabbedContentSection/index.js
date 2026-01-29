const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
        // Add active to clicked button
        button.classList.add("active");

        const tabId = button.dataset.tab;

        // Remove active from all content
        tabContents.forEach(content => content.classList.remove("active"));

        // Add active to selected content
        document.getElementById(tabId).classList.add("active");
    });
});



gsap.from(".tab-contents", {
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  delay: 0.4,
});

const tl = gsap.timeline();

tl.from(".hero-content h1", {
    opacity:0,
    y:60,
    duration:1,
})

tl.from(".hero-content p", {
    opacity:0,
    y:60,
    duration:1,
})
tl.from(".hero-content a", {
    opacity:0,
    duration:1,
})
