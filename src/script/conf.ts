const openConfModalElements = [
  ...document.querySelectorAll(".openConfModal"),
] as HTMLElement[];
const confModal = document.getElementById("confModal") as HTMLElement;
const closeModalConf = confModal.querySelector(".closeModal");

openConfModalElements.map((openConfModal) => {
  openConfModal.onclick = () => {
    confModal?.classList.add("open");
  };
});

closeModalConf?.addEventListener("click", () => {
  confModal?.classList.remove("open");
});
