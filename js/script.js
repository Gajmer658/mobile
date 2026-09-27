// ==========================================================================
// Sanjay Mobile Repairing — script.js
// ==========================================================================

// =============================
// BUSINESS INFORMATION
// EDIT THESE VALUES
// =============================
const CONFIG = {
  PHONE_NUMBER: "+919394186030",        // used for the "Call Now" buttons (tel: link)
  WHATSAPP_NUMBER: "919394186030",      // country code + number, no + or spaces, used for wa.me links
  GOOGLE_MAPS_URL: "https://www.google.com/maps/search/?api=1&query=28.17645447548423,94.79886247548423", // used for "Get Directions"

  // Pre-filled WhatsApp messages per context. Add more keys if you add more CTAs.
  WHATSAPP_MESSAGES: {
    repair: "Hello, I would like to enquire about mobile phone repair.",
    accessories: "Hello, I would like to enquire about mobile accessories.",
    general: "Hello, I would like to know more about Sanjay Mobile Repairing."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  wireCallLinks();
  wireWhatsAppLinks();
  wireDirectionsLinks();
  setupMobileMenu();
  setupActiveNavHighlight();
  setFooterYear();
});

// ---------- Call buttons ----------
// Every element with class="js-call-link" gets its href set from CONFIG,
// so the phone number only needs to be changed in one place above.
function wireCallLinks() {
  document.querySelectorAll(".js-call-link").forEach((link) => {
    link.setAttribute("href", `tel:${CONFIG.PHONE_NUMBER}`);
  });
}

// ---------- WhatsApp buttons ----------
// Add data-message="repair" | "accessories" | "general" (or a new key you
// define above) to any link with class="js-whatsapp-link" to control which
// pre-filled message it opens with.
function wireWhatsAppLinks() {
  document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    const context = link.dataset.message || "general";
    const message = CONFIG.WHATSAPP_MESSAGES[context] || CONFIG.WHATSAPP_MESSAGES.general;
    const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
}

// ---------- Directions button ----------
function wireDirectionsLinks() {
  document.querySelectorAll(".js-directions-link").forEach((link) => {
    link.setAttribute("href", CONFIG.GOOGLE_MAPS_URL);
  });
}

// ---------- Mobile hamburger menu ----------
function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  const backdrop = document.getElementById("navBackdrop");
  if (!toggle || !nav || !backdrop) return;

  function openMenu() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    backdrop.hidden = true;
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  backdrop.addEventListener("click", closeMenu);

  // Close the menu after tapping a nav link (mobile UX)
  nav.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape for keyboard users
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // If the window is resized past the desktop breakpoint, reset state
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) closeMenu();
  });
}

// ---------- Highlight nav link for the section in view ----------
function setupActiveNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---------- Footer year ----------
function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}
