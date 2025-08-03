// AlphaMilk Website JavaScript

// Declare gtag variable if not already declared
const gtag =
  window.gtag ||
  (() => {
    /* No-op if gtag is not defined */
  })

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations()
  initializeTracking()
  initializeMobileMenu()
})

// Animation functions
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })
}

// Analytics tracking
function initializeTracking() {
  // Track page load
  trackEvent("page", "load", window.location.pathname)

  // Track scroll depth
  let maxScroll = 0
  window.addEventListener("scroll", () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent
      trackEvent("scroll", "depth", `${scrollPercent}%`)
    }
  })

  // Track button clicks
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      trackEvent("button", "click", button.textContent.trim())
    })
  })
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }
}

// Utility functions
function trackEvent(category, action, label) {
  console.log(`Analytics: ${category} - ${action} - ${label}`)

  // Google Analytics (if implemented)
  if (typeof gtag !== "undefined") {
    gtag("event", action, {
      event_category: category,
      event_label: label,
    })
  }
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification("Copied to clipboard!")
    })
    .catch(() => {
      showNotification("Failed to copy")
    })
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = "fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
  notification.textContent = message

  document.body.appendChild(notification)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Contract address copy function
function copyContract() {
  const contractAddress = "BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD"
  copyToClipboard(contractAddress)
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
