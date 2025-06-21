/* public/menu.js */
document.addEventListener("DOMContentLoaded", () => {
  const btn  = document.getElementById("menuToggle");
  const menu = document.getElementById("sideMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  /* Menü schließen, wenn ein Link angeklickt wurde (mobile UX) */
  menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => menu.classList.remove("open"))
  );
});
