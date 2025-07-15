// SMOOTH SCROLL
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// SCROLL SPY HIGHLIGHTING
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll(".navbar ul li").forEach(li => li.classList.remove("active"));
            const activeLink = document.querySelector(`.navbar ul li a[href="#${id}"]`);
            if (activeLink) activeLink.parentElement.classList.add("active");
        }
    });
});

// TYPING EFFECT FOR HOME ROLES (replaces the CSS rotation)
const roles = ["Frontend Developer", "Blogger", "YouTuber", "Designer"];
let index = 0;
let charIndex = 0;
let typingSpan = document.querySelector(".home-info h2 span");

function typeText() {
    if (!typingSpan) return;
    if (charIndex < roles[index].length) {
        typingSpan.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => eraseText(), 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingSpan.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeText, 200);
    }
}

typeText();
// Optional: Fade in each service box when it enters viewport
const serviceBoxes = document.querySelectorAll(".service-box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

serviceBoxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = "translateY(20px)";
    observer.observe(box);
});
