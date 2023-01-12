const Menu = document.getElementById("toggleMenu");
const LinksList = document.getElementById("linksMenu");
const Links = document.getElementById("linksList");

function toggleNavbar() {
  if (LinksList.className === "smallNavbar hidden") {
    LinksList.classList.remove("hidden");
  } else {
    LinksList.classList.add("hidden");
  }
}

Menu.addEventListener("click", () => {
  toggleNavbar();
});

Links.addEventListener("click", () => {
  toggleNavbar();
});
