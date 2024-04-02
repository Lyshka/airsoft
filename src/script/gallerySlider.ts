import Swiper from "swiper";
import "swiper/css";

const gallerySlider = new Swiper("#gallerySlider", {
  slidesPerView: 1,
  spaceBetween: 46,
  loop: true,
  initialSlide: 2,
});

// Добавление обработчиков событий для стрелок вперед и назад
const prevButtonReviewsSlider = document.querySelector(
  ".prevGallerySlider"
) as HTMLElement;
const nextButtonReviewsSlider = document.querySelector(
  ".nextGallerySlider"
) as HTMLElement;

prevButtonReviewsSlider.addEventListener("click", function () {
  gallerySlider.slidePrev();
});
nextButtonReviewsSlider.addEventListener("click", function () {
  gallerySlider.slideNext();
});

// ---------

const previewGalleryMainSlider = new Swiper("#previewGalleryMainSlider", {
  slidesPerView: 1,
  loop: true,
});

const prevPreviewGalleryMainSlider = document.querySelector(
  ".prevGalleryMainSlider"
) as HTMLElement;
const nextPreviewGalleryMainSlider = document.querySelector(
  ".nextGalleryMainSlider"
) as HTMLElement;

prevPreviewGalleryMainSlider.addEventListener("click", function () {
  previewGalleryMainSlider.slidePrev();
});
nextPreviewGalleryMainSlider.addEventListener("click", function () {
  previewGalleryMainSlider.slideNext();
});

const galleryMainSlideElements = [
  ...document.querySelectorAll(".galleryMainSlide"),
] as HTMLElement[];
const galleryMainModal = document.getElementById("galleryMainModal");
const closeModal = galleryMainModal?.querySelector(
  ".closeModal"
) as HTMLButtonElement;

galleryMainSlideElements.map((galleryMain) => {
  galleryMain.onclick = () => {
    const slideNumber = galleryMain.dataset["slide"] as string;
    previewGalleryMainSlider.slideTo(parseInt(slideNumber));

    galleryMainModal?.classList.add("open");
    console.log(galleryMainModal);
  };
});

closeModal.onclick = () => {
  galleryMainModal?.classList.remove("open");
};
