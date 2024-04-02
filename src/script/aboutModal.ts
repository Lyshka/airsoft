const currentImgAboutGallery = document.getElementById(
  "currentImgAboutGallery"
) as HTMLImageElement;
const aboutModal = document.getElementById("aboutModal");
const closeModal = aboutModal?.querySelector(".closeModal");

const galleryAboutSlideElements = [
  ...document.querySelectorAll(".galleryAboutSlide"),
] as HTMLElement[];

galleryAboutSlideElements.map((galleryAboutSlide) => {
  galleryAboutSlide.onclick = () => {
    const imgElement = galleryAboutSlide.querySelector(
      "img"
    ) as HTMLImageElement;
    const imgSrc = imgElement.src;

    currentImgAboutGallery.src = imgSrc;
    aboutModal?.classList.add("open");
  };
});

closeModal?.addEventListener("click", () => {
  aboutModal?.classList.remove("open");
});
