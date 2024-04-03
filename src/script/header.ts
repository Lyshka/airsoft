const openMobileMenu = document.getElementById(
  "openMobileMenu"
) as HTMLButtonElement;
const closeMobileMenu = document.getElementById(
  "closeMobileMenu"
) as HTMLButtonElement;
const headerMobileMenu = document.getElementById("headerMobileMenu");

const HTMLELEMENT = document.querySelector("html") as HTMLElement;

openMobileMenu.onclick = () => {
  headerMobileMenu?.classList.add("open");
  openMobileMenu.style.display = "none";
  closeMobileMenu.style.display = "block";
  HTMLELEMENT.style.overflowY = "hidden";
};

closeMobileMenu.onclick = () => {
  headerMobileMenu?.classList.remove("open");
  openMobileMenu.style.display = "block";
  closeMobileMenu.style.display = "none";
  HTMLELEMENT.style.overflowY = "scroll";

};
