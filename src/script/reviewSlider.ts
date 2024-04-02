import Swiper from "swiper";
import "swiper/css";

const reviewsSlider = new Swiper("#reviewsSlider", {
  breakpoints: {
    1368: {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 24,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
      watchSlidesProgress: true,
    },
  },
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
  effect: "fade", // Устанавливаем эффект fade
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
