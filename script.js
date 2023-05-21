document.addEventListener("DOMContentLoaded", showPageContent(), false);

function showPageContent() {
  const url = "https://ghibliapi.herokuapp.com/people";

  const container = document.querySelector("main");

  function showPeople(people) {
    people.forEach((person) => {
      // create div to contain person's info
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create elements with person's name, age, gender
      const name = document.createElement("h2");
      name.textContent = person.name;

      const age = document.createElement("p");
      age.textContent = "Age: ";
      const ageVal = document.createElement("span");
      ageVal.textContent = person.age;

      const gender = document.createElement("p");
      gender.textContent = "Gender: ";
      const genderVal = document.createElement("span");
      genderVal.textContent = person.gender;

      // append card to container
      container.appendChild(card);

      // append person name, age and gender to card
      card.appendChild(name);
      card.appendChild(age);
      age.appendChild(ageVal);
      card.appendChild(gender);
      gender.appendChild(genderVal);
    });
  }

  function handleFetchError() {
    const error = document.createElement("p");
    error.textContent = "Error fetching data, something seems to be wrong with the source API.";
    showPeople(placeholderPeople);
    container.appendChild(error);
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => showPeople(data))
    .catch(handleFetchError);
}

const placeholderPeople = [
  {
    name: "Placeholder name 1",
    age: 42,
    gender: "Placeholder gender 1",
  },
  {
    name: "Placeholder name 2",
    age: 42,
    gender: "Placeholder gender 2",
  },
  {
    name: "Placeholder name 3",
    age: 42,
    gender: "Placeholder gender 3",
  },
];
