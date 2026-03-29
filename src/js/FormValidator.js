/**
 * Валидация и отправка формы
 * @param {Function} onSuccess - вызывается после отправки
 */
export default function setupForm(onSuccess) {

  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", (e) => {

    e.preventDefault();
    // получаем значения
    const name = document.querySelector("#field-name");
    const email = document.querySelector("#field-email");
    const message = document.querySelector("#field-message");

    let hasError = false;

    // проверяемимя
    if (name.value.trim() === "") {
      name.classList.add("invalid");
      document.querySelector("#error-name").textContent = "Name is required";
      hasError = true;
    } else {
      name.classList.remove("invalid");
      document.querySelector("#error-name").textContent = "";
    }

    // проверяем email
    if (email.value.trim() === "") {
      email.classList.add("invalid");
      document.querySelector("#error-email").textContent = "Email is required";
      hasError = true;
    } else {
      email.classList.remove("invalid");
      document.querySelector("#error-email").textContent = "";

    }

    // проверяем сообщение
    if (message.value.trim() === "") {
      message.classList.add("invalid");
      document.querySelector("#error-message").textContent = "Message is required";
      hasError = true;

    } else {
      message.classList.remove("invalid");
      document.querySelector("#error-message").textContent = "";

    }

    // если есть ошибки - не отправляем
    if (hasError) {
      return;
    }

    // отправляем на сервер
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((res) => {

        form.reset();
        onSuccess();
        return res;
      })
      .catch(() => {});

  });

}