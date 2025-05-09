document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".icon");
      const isOpen = content.classList.contains("open");

     
      document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
      document.querySelectorAll(".accordion-button .icon").forEach(i => i.textContent = "+");

      if (!isOpen) {
        content.classList.add("open");
        icon.textContent = "−";
      }
    });
  });
});