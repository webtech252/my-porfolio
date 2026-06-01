const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const faqButtons = document.querySelectorAll("[data-faq-button]");
const leadForms = document.querySelectorAll("[data-lead-form]");
const years = document.querySelectorAll("[data-current-year]");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

years.forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentElement?.querySelector(".faq-answer");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (answer) {
      answer.hidden = expanded;
    }
  });
});

leadForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const required = ["name", "phone", "email", "service_interest"];
    const success = form.querySelector("[data-form-success]");
    if (!success) {
      return;
    }

    const valid = required.every((field) => {
      const value = data.get(field);
      return typeof value === "string" && value.trim();
    });

    success.textContent = valid
      ? "Thanks. This static demo captured your request locally. Connect this form to email, CRM, or WhatsApp automation for live leads."
      : "Please complete the required fields before sending your request.";
    success.classList.add("is-visible");

    if (valid) {
      form.reset();
    }
  });
});
