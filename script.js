// Typing Effect
const typedText = document.querySelector(".typed-text");
const words = ["a Web Developer",  "an Software Engineer"];
let index = 0, char = 0, deleting = false;

function type() {
  let current = words[index];
  if (!deleting && char <= current.length) {
    typedText.textContent = current.slice(0, char++);
  } else if (deleting && char >= 0) {
    typedText.textContent = current.slice(0, char--);
  }

  if (char === current.length + 1) deleting = true;
  if (char === 0 && deleting) {
    deleting = false;
    index = (index + 1) % words.length;
  }
  setTimeout(type, deleting ? 50 : 100);
}
type();

// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '🌞';
}

// Toggle theme
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// Scroll Animation
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => observer.observe(fader));

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! I'll get back to you soon.");
  this.reset();
});
