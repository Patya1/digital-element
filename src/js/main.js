import "../scss/main.scss";
import setupForm from "./FormValidator.js";
import MobileNav from "./MobileNav.js";
import setupModal from "./Modal.js";

document.addEventListener("DOMContentLoaded", () => {
  new MobileNav();
  const modal = setupModal();
  setupForm(() => {
    modal.close();
  });

});