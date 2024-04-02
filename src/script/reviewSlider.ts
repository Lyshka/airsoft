import Swiper from "swiper";
import "swiper/css";

const reviewsSlider = new Swiper("#reviewsSlider", {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
});

// Добавление обработчиков событий для стрелок вперед и назад
const prevButtonReviewsSlider = document.querySelector(
  ".prevReviewsSlider"
) as HTMLElement;
const nextButtonReviewsSlider = document.querySelector(
  ".nextReviewsSlider"
) as HTMLElement;

prevButtonReviewsSlider.addEventListener("click", function () {
  reviewsSlider.slidePrev();
});
nextButtonReviewsSlider.addEventListener("click", function () {
  reviewsSlider.slideNext();
});

const previewReviewSlider = new Swiper("#previewReviewSlider", {
  slidesPerView: 1,
  loop: true,
});

const prevButtonPreviewReviewSlider = document.querySelector(
  ".prevPreviewReviewSlider"
) as HTMLElement;
const nextButtonPreviewReviewSlider = document.querySelector(
  ".nextPreviewReviewSlider"
) as HTMLElement;

prevButtonPreviewReviewSlider.addEventListener("click", function () {
  previewReviewSlider.slidePrev();
});
nextButtonPreviewReviewSlider.addEventListener("click", function () {
  previewReviewSlider.slideNext();
});

const reviewSlideElements = [
  ...document.querySelectorAll(".reviewSlide"),
] as HTMLElement[];
const reviewModal = document.getElementById("reviewModal");
const closeModal = reviewModal?.querySelector(
  ".closeModal"
) as HTMLButtonElement;

reviewSlideElements.map((reviewSlide) => {
  reviewSlide.onclick = () => {
    const slideNumber = reviewSlide.dataset["slide"] as string;
    previewReviewSlider.slideTo(parseInt(slideNumber));

    reviewModal?.classList.add("open");
  };
});

closeModal.onclick = () => {
  reviewModal?.classList.remove("open");
};
