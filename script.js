document.addEventListener("DOMContentLoaded", showPidContent(), false);

function showPidContent() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const container = document.querySelector("main");

  function showPosts(posts) {
    posts.forEach((post) => {
      // create div to contain post's info
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create elements with post's title, id, body
      const title = document.createElement("h2");
      title.textContent = post.title;

      const id = document.createElement("p");
      id.textContent = "id: ";
      const idVal = document.createElement("span");
      idVal.textContent = post.id;

      const body = document.createElement("p");
      body.textContent = "body: ";
      const bodyVal = document.createElement("span");
      bodyVal.textContent = post.body;

      // append card to container
      container.appendChild(card);

      // append post title, id and body to card
      card.appendChild(title);
      card.appendChild(id);
      id.appendChild(idVal);
      card.appendChild(body);
      body.appendChild(bodyVal);
    });
  }

  function handleFetchError() {
    const error = document.createElement("p");
    error.textContent =
      "Error fetching data, something seems to be wrong with the source API.";
    showPosts(placeholderPosts);
    container.appendChild(error);
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => showPosts(data))
    .catch(handleFetchError);
}

const placeholderPosts = [
  {
    title: "Placeholder title 1",
    id: 40,
    body: "Placeholder body 1",
  },
  {
    title: "Placeholder title 2",
    id: 41,
    body: "Placeholder body 2",
  },
  {
    title: "Placeholder title 3",
    id: 42,
    body: "Placeholder body 3",
  },
];
