const containerCheckboxElements = [
  ...document.querySelectorAll(".containerCheckbox"),
] as HTMLElement[];

containerCheckboxElements.map((containerCheckbox) => {
  const inputElement = containerCheckbox.querySelector(
    'input[type="checkbox"]'
  ) as HTMLInputElement;

  inputElement.onchange = () => {
    const iconCheckBox = containerCheckbox.querySelector(".iconCheckBox");

    iconCheckBox?.classList.toggle("active");
  };
});
