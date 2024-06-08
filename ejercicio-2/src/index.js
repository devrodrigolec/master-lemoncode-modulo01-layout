document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const container = document.querySelector(".container");

  form.addEventListener("change", (e) => {
    if (e.target.value === "red-theme") {
      container.classList.remove("default");
      container.classList.remove("blue-theme");
      container.classList.add("red-theme");
    }
    if (e.target.value === "blue-theme") {
      container.classList.remove("default");
      container.classList.remove("red-theme");
      container.classList.add("blue-theme");
    }
  });
});
