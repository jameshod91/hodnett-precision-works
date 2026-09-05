const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// HPW Google Analytics interaction tracking
document.addEventListener("click", function (event) {
  const link = event.target.closest("a");
  if (!link || typeof gtag !== "function") return;
  const href = link.getAttribute("href") || "";
  const text = (link.textContent || "").trim().toLowerCase();
  let eventName = null;
  if (href.includes("facebook.com")) eventName = "facebook_click";
  else if (href.startsWith("mailto:") || text.includes("quote") || href === "#quote") eventName = "quote_click";
  else if (href === "#gallery" || text.includes("gallery") || text.includes("view our work")) eventName = "gallery_click";
  if (eventName) gtag("event", eventName, {link_url: link.href || href, link_text: (link.textContent || "").trim()});
});
