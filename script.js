function handleSubmit(event) {
  event.preventDefault();

  let formData = new FormData(formElement);
  let data = new URLSearchParams(formData);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

let formElement = document.querySelector(".form-data");

formElement.addEventListener("submit", handleSubmit);
