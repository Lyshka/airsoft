const buttonSelectMapElements = [
  ...document.querySelectorAll(".button-select-map"),
] as HTMLButtonElement[];

buttonSelectMapElements.map((buttonSelectMap) => {
  buttonSelectMap.onclick = () => {
    const mapName = buttonSelectMap.dataset["map"] as string;

    const mapContactElements = [
      ...document.querySelectorAll(".map-contact"),
    ] as HTMLElement[];

    mapContactElements.map((mapContact) => {
      mapContact.classList.remove("current");
    });

    buttonSelectMapElements.map((buttonSelectMap) => {
      buttonSelectMap.classList.remove("active");
    });

    const activeMap = document.getElementById(mapName);
    activeMap?.classList.add("current");
    buttonSelectMap.classList.add("active");
  };
});
