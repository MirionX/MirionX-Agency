// Navigation menu toggle
const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Services section
const services = [
  { title: "Web Design", description: "Create stunning, responsive websites tailored to your brand." },
  { title: "Digital Marketing", description: "Boost your online presence and reach your target audience." },
  { title: "Brand Identity", description: "Develop a unique and memorable brand identity for your business." },
  { title: "UI/UX Design", description: "Craft intuitive and engaging user experiences for your digital products." },
]

const servicesGrid = document.querySelector(".services-grid")

services.forEach((service) => {
  const serviceItem = document.createElement("div")
  serviceItem.classList.add("service-item")
  serviceItem.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `
  servicesGrid.appendChild(serviceItem)
})

// Portfolio section
const portfolioItems = [
  { title: "Project 1", description: "Web Design", image: "https://via.placeholder.com/300x200" },
  { title: "Project 2", description: "Branding", image: "https://via.placeholder.com/300x200" },
  { title: "Project 3", description: "Mobile App", image: "https://via.placeholder.com/300x200" },
  { title: "Project 4", description: "Digital Marketing", image: "https://via.placeholder.com/300x200" },
]

const portfolioGrid = document.querySelector(".portfolio-grid")

portfolioItems.forEach((item) => {
  const portfolioItem = document.createElement("div")
  portfolioItem.classList.add("portfolio-item")
  portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-overlay">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `
  portfolioGrid.appendChild(portfolioItem)
})

// Testimonials section
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    content: "MirionX helped us transform our digital presence. Highly recommended!",
    image: "https://via.placeholder.com/100x100",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, Brand Co",
    content: "The team at MirionX is incredibly talented and professional.",
    image: "https://via.placeholder.com/100x100",
  },
]

const testimonialSlider = document.querySelector(".testimonial-slider")

testimonials.forEach((testimonial) => {
  const testimonialItem = document.createElement("div")
  testimonialItem.classList.add("testimonial-item")
  testimonialItem.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <p>${testimonial.content}</p>
        <h4>${testimonial.name}</h4>
        <p>${testimonial.role}</p>
    `
  testimonialSlider.appendChild(testimonialItem)
})

// Team section
const teamMembers = [
  {
    name: "Mirion Eve",
    role: "CEO & Founder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250120-WA0026.jpg-BBTEZgJSkzrNiDrQ29hfOl3QR6zsI4.jpeg",
  },
  {
    name: "Ebirama Jarju",
    role: "Creative Director",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0035.jpg-cch2JHUgraNmHz99kL4LNcu8xEJ7gH.jpeg",
  },
  {
    name: "Junior Animashaun",
    role: "Technical Lead",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0029.jpg-CJOoCmNYcwC8QCkhBHDldy2DBKunHy.jpeg",
  },
  {
    name: "Modoulamin Sanneh",
    role: "Marketing Strategist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0010.jpg-uIwb67PqU4DsznkQQ9kRG1JqSVuT6Y.jpeg",
  },
]

const teamGrid = document.querySelector(".team-grid")

teamMembers.forEach((member) => {
  const teamMember = document.createElement("div")
  teamMember.classList.add("team-member")
  teamMember.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="social-icons">
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    `
  teamGrid.appendChild(teamMember)
})

// Contact form submission
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const formData = new FormData(contactForm)
  const response = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (response.ok) {
    alert("Message sent successfully!")
    contactForm.reset()
  } else {
    alert("Error sending message. Please try again.")
  }
})

// ScrollReveal initialization
const ScrollReveal = window.ScrollReveal

ScrollReveal().reveal(".hero, .services, .about, .portfolio, .testimonials, .team, .contact", {
  delay: 200,
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
})

