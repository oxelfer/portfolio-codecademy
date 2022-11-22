const mobileMenu = document.querySelector("#toggle-links");
const hamburgerButton = document.querySelector("#hamburger-icon");

const articleListImages = document.querySelectorAll(".article-list-item img");

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

articleListImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    /* console.log(event.target); */
    image.style.maxWidth == "5em"
      ? (image.style.maxWidth = "100%")
      : (image.style.maxWidth = "5em");
  });
});
