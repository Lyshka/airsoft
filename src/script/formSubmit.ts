const allFormElements = [
  ...document.querySelectorAll("form"),
] as HTMLFormElement[];

allFormElements.map((formElement) => {
  formElement.onsubmit = (event) => {
    event.preventDefault();
    const errorConfElement = formElement.querySelector(".errorConf");

    const confInput = (event.target as HTMLFormElement)?.elements?.namedItem(
      "conf"
    ) as HTMLInputElement;
    const isConfChecked = confInput.checked;

    if (!isConfChecked) {
      errorConfElement?.classList.add("active");
      return;
    } else {
      errorConfElement?.classList.remove("active");
    }

    const errorTelElement = formElement.querySelector(".errorTel");
    const phoneInputElement = formElement.querySelector(
      ".phone-input"
    ) as HTMLInputElement;
    const valueInput = phoneInputElement.value;
    const valueLength = valueInput.length;
    const isTelValid =
      (valueInput.startsWith("+375 (29)") && valueLength === 19) ||
      (valueInput.startsWith("+375 (44)") && valueLength === 19) ||
      (valueInput.startsWith("+375 (33)") && valueLength === 19) ||
      (valueInput.startsWith("+375 (25)") && valueLength === 19);

    if (!isTelValid) {
      errorTelElement?.classList.add("active");
      phoneInputElement.classList.add("error");
      return;
    } else {
      errorTelElement?.classList.remove("active");
      phoneInputElement.classList.remove("error");
    }

    const typeForm = formElement.dataset["typeForm"];

    if (typeForm === "requestCall") {
      const modalRequestCallResponse = document.getElementById(
        "modalRequestCallResponse"
      );

      modalRequestCallResponse?.classList.add("open");
    } else {
      const modalSignUpResponse = document.getElementById(
        "modalSignUpResponse"
      );

      modalSignUpResponse?.classList.add("open");
    }
  };
});
