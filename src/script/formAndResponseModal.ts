const formAndResponseModalELements = [
  ...document.querySelectorAll(".formAndResponseModal"),
] as HTMLElement[];

formAndResponseModalELements.map((formAndResponseModal) => {
  const closeModalButtonElements = [
    ...formAndResponseModal.querySelectorAll(".closeModal"),
  ] as HTMLButtonElement[];

  closeModalButtonElements.map((closeModalButton) => {
    closeModalButton.onclick = () => {
      formAndResponseModal.classList.remove("open");
    };
  });
});

const requestCallOpenButtonElements = [
  ...document.querySelectorAll(".requestCallOpenButton"),
] as HTMLButtonElement[];
const modalRequestCall = document.getElementById("modalRequestCall");

requestCallOpenButtonElements.map((requestCallOpenButton) => {
  requestCallOpenButton.onclick = () => {
    modalRequestCall?.classList.add("open");
  };
});

const signUpOpenButtonElements = [
  ...document.querySelectorAll(".signUpOpenButton"),
] as HTMLButtonElement[];
const modalSignUp = document.getElementById("modalSignUp");

signUpOpenButtonElements.map((signUpOpenButton) => {
  signUpOpenButton.onclick = () => {
    modalSignUp?.classList.add("open");
  };
});