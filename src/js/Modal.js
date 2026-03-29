/**
 * Модалка - открытие и закрытие
 * @returns {object} методы open и close
 */
export default function setupModal() {
  const modal = document.querySelector("#modal");
  const overlay = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".modal-close");
  const openButtons = document.querySelectorAll("[data-open-modal]");
  // открытие
  function open() {
    modal.classList.add("active");
    document.body.classList.add("is-locked");
  }

  // закрытие
  function close() {
    modal.classList.remove("active");
    document.body.classList.remove("is-locked");
  }

  // кнопки открытия
  openButtons.forEach((btn) => {
    btn.addEventListener("click", open);
  });

  // закрытие при нажатии на крестик
  closeBtn.addEventListener("click", close);

  // закрытие при нажатии на оверлей
  overlay.addEventListener("click", close);

  // закрытие при нажатии на Escape
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      close();
    }

  });
  
  return { open, close };
}
