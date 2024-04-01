const containerCheckboxElements = [
  ...document.querySelectorAll("containerCheckbox"),
] as HTMLInputElement[];

containerCheckboxElements.map((containerCheckbox) => {
  containerCheckbox.onchange = () => {
    const inputElement = containerCheckbox.querySelector(
      'input[type="checkbox"]'
    );
    const iconCheckBox =
      containerCheckbox.querySelector(".iconCheckBox");
  };

  input.clas;
});
