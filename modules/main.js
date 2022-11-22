const mobileMenu = document.querySelector("#toggle-links");
const hamburgerButton = document.querySelector("#hamburger-icon");

// hides or displays menu in mobile version
hamburgerButton.addEventListener("click", (event) => {
  /* console.log(event.target); */
  if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "column";
    hamburgerButton.innerHTML = `<span class="material-symbols-outlined">close</span>`;
  } else {
    mobileMenu.style.display = "none";
    hamburgerButton.innerHTML = `<span class="material-symbols-outlined">menu</span>`;
  }
});
