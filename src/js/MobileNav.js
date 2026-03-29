/**
 * Мобильное меню
 */
export default class MobileNav {

  /** @constructor */
  constructor() {
    this.menu = document.querySelector(".mobile-menu");
    this.overlay = document.querySelector(".mobile-menu-overlay");
    this.closeBtn = document.querySelector(".mobile-close-btn");
    this.burger = document.querySelector(".burger");
    this.links = document.querySelectorAll(".mobile-link");
    this.setupEvents();
  }

  /**добавляем события*/
  setupEvents() {
    this.burger.addEventListener("click", () => {
      this.open();
    });

    this.closeBtn.addEventListener("click", () => {
      this.close();
    });

    this.overlay.addEventListener("click", () => {
      this.close();
    });

    this.links.forEach((link) => {
      link.addEventListener("click", () => {
        this.close();
      });
    });
  }

  /** Открыть меню */
  open() {
    this.menu.classList.add("active");
    document.body.classList.add("is-locked");
  }

  /** Закрыть меню*/
  close() {
    this.menu.classList.remove("active");
    document.body.classList.remove("is-locked");

  }

}
