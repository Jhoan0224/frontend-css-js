window.addEventListener("load", () => {
  fetch("../pages/moda.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("modal-container").innerHTML = html;

      const modal = document.getElementById("modal");
      modal.style.display = "block";

      setTimeout(() => {
        modal.style.display = "none";
      }, 7000);
    })
    .catch(error => console.error("Error cargando el modal:", error));
});
