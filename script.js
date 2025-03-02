// Initialize Three.js scenes
let heroScene, heroCamera, heroRenderer, heroSphere
let aboutScene, aboutCamera, aboutRenderer, aboutCube

// Custom cursor
const cursor = document.getElementById("cursor")
const cursorBlur = document.getElementById("cursor-blur")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"
  cursorBlur.style.left = e.clientX - 200 + "px"
  cursorBlur.style.top = e.clientY - 200 + "px"
})

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

// Initialize Three.js scenes
function initThreeJS() {
  // Hero scene
  heroScene = new THREE.Scene()
  heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000)
  heroRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("hero-canvas"), alpha: true })
  heroRenderer.setSize(window.innerWidth / 2, window.innerHeight)

  const geometry = new THREE.SphereGeometry(1, 32, 32)
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ffff,
    wireframe: true,
    emissive: 0x00ffff,
    emissiveIntensity: 0.5,
  })
  heroSphere = new THREE.Mesh(geometry, material)
  heroScene.add(heroSphere)

  const light = new THREE.PointLight(0xffffff, 1, 100)
  light.position.set(0, 0, 10)
  heroScene.add(light)

  heroCamera.position.z = 5

  // About scene
  aboutScene = new THREE.Scene()
  aboutCamera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000)
  aboutRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("about-canvas"), alpha: true })
  aboutRenderer.setSize(window.innerWidth / 2, window.innerHeight)

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
  const cubeMaterial = new THREE.MeshPhongMaterial({
    color: 0xff00ff,
    wireframe: true,
    emissive: 0xff00ff,
    emissiveIntensity: 0.5,
  })
  aboutCube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  aboutScene.add(aboutCube)

  const aboutLight = new THREE.PointLight(0xffffff, 1, 100)
  aboutLight.position.set(0, 0, 10)
  aboutScene.add(aboutLight)

  aboutCamera.position.z = 5
}

// Animate Three.js scenes
function animate() {
  requestAnimationFrame(animate)

  heroSphere.rotation.x += 0.01
  heroSphere.rotation.y += 0.01

  aboutCube.rotation.x += 0.01
  aboutCube.rotation.y += 0.01

  heroRenderer.render(heroScene, heroCamera)
  aboutRenderer.render(aboutScene, aboutCamera)
}

// Services section
const services = [
  {
    title: "Immersive Web Experiences",
    description: "Create stunning, interactive websites that captivate your audience.",
  },
  {
    title: "AI-Powered Solutions",
    description: "Harness the power of artificial intelligence to revolutionize your business processes.",
  },
  {
    title: "Blockchain Integration",
    description: "Implement secure, decentralized solutions using cutting-edge blockchain technology.",
  },
  {
    title: "Virtual Reality Development",
    description: "Transport your users to new worlds with immersive VR experiences.",
  },
]

const servicesGrid = document.querySelector(".services-grid")

services.forEach((service) => {
  const serviceItem = document.createElement("div")
  serviceItem.classList.add("service-item", "fade-in")
  serviceItem.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `
  servicesGrid.appendChild(serviceItem)
})

// Portfolio section
const portfolioItems = [
  {
    title: "Virtual Reality Game",
    description: "Immersive VR Experience",
    image: "https://via.placeholder.com/300x200",
  },
  { title: "AI-Powered Assistant", description: "Smart Home Solution", image: "https://via.placeholder.com/300x200" },
  {
    title: "Blockchain Marketplace",
    description: "Decentralized Trading Platform",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Augmented Reality App",
    description: "Interactive AR Education Tool",
    image: "https://via.placeholder.com/300x200",
  },
]

const portfolioGrid = document.querySelector(".portfolio-grid")

portfolioItems.forEach((item) => {
  const portfolioItem = document.createElement("div")
  portfolioItem.classList.add("portfolio-item", "fade-in")
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
    role: "CEO, Tech Innovators",
    content: "MirionX transformed our digital presence with their cutting-edge solutions. Highly recommended!",
    image: "https://via.placeholder.com/100x100",
  },
  {
    name: "Jane Smith",
    role: "CTO, Future Systems",
    content: "The team at MirionX is incredibly talented and forward-thinking. They delivered beyond our expectations.",
    image: "https://via.placeholder.com/100x100",
  },
]

const testimonialSlider = document.querySelector(".testimonial-slider")

testimonials.forEach((testimonial) => {
  const testimonialItem = document.createElement("div")
  testimonialItem.classList.add("testimonial-item", "fade-in")
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
    role: "CEO & Visionary",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250120-WA0026.jpg-BBTEZgJSkzrNiDrQ29hfOl3QR6zsI4.jpeg",
  },
  {
    name: "Ebirama Jarju",
    role: "Creative Technologist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0035.jpg-cch2JHUgraNmHz99kL4LNcu8xEJ7gH.jpeg",
  },
  {
    name: "Junior Animashaun",
    role: "AI & Blockchain Expert",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0029.jpg-CJOoCmNYcwC8QCkhBHDldy2DBKunHy.jpeg",
  },
  {
    name: "Modoulamin Sanneh",
    role: "VR/AR Specialist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0010.jpg-uIwb67PqU4DsznkQQ9kRG1JqSVuT6Y.jpeg",
  },
]

const teamGrid = document.querySelector(".team-grid")

teamMembers.forEach((member) => {
  const teamMember = document.createElement("div")
  teamMember.classList.add("team-member", "fade-in")
  teamMember.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="social-icons">
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
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

// Scroll animations
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in")
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    if (elementTop < windowHeight - 100) {
      element.classList.add("active")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// Initialize
window.addEventListener("load", () => {
  initThreeJS()
  animate()
  revealOnScroll()
})

// Resize event listener
window.addEventListener("resize", () => {
  heroCamera.aspect = window.innerWidth / 2 / window.innerHeight
  heroCamera.updateProjectionMatrix()
  heroRenderer.setSize(window.innerWidth / 2, window.innerHeight)

  aboutCamera.aspect = window.innerWidth / 2 / window.innerHeight
  aboutCamera.updateProjectionMatrix()
  aboutRenderer.setSize(window.innerWidth / 2, window.innerHeight)
})

