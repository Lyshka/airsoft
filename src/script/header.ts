const openMobileMenu = document.getElementById(
  "openMobileMenu"
) as HTMLButtonElement;
const closeMobileMenu = document.getElementById(
  "closeMobileMenu"
) as HTMLButtonElement;
const headerMobileMenu = document.getElementById(
  "headerMobileMenu"
) as HTMLElement;
const HTMLELEMENT = document.querySelector("html") as HTMLElement;

const linkUrlMobileMenuElements = [
  ...headerMobileMenu.querySelectorAll("a"),
] as HTMLAnchorElement[];

const openMobileMenuHandle = () => {
  headerMobileMenu?.classList.add("open");
  openMobileMenu.style.display = "none";
  closeMobileMenu.style.display = "block";
  HTMLELEMENT.style.overflowY = "hidden";
};

const closeMobileMenuHandle = () => {
  headerMobileMenu?.classList.remove("open");
  openMobileMenu.style.display = "block";
  closeMobileMenu.style.display = "none";
  HTMLELEMENT.style.overflowY = "scroll";
};

openMobileMenu.onclick = () => {
  openMobileMenuHandle();
};

closeMobileMenu.onclick = () => {};

linkUrlMobileMenuElements.map((linkUrlMobile) => {
  linkUrlMobile.onclick = () => {
    closeMobileMenuHandle();
  };
});
