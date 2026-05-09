const contactForm = document.getElementById("contact-form");
const businessEmail = "truck.the.chill@gmail.com";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const subject = encodeURIComponent(`Consulta desde la página web de The Chill - ${name}`);
  const body = encodeURIComponent(
    `Hola, equipo de The Chill.\n\n` +
    `Mi nombre es ${name}.\n` +
    `Mi correo es ${email}.\n\n` +
    `Mensaje:\n${message}\n\n` +
    `Enviado desde la página web.`
  );

  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
