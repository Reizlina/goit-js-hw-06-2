const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listItem = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.class = "item";
  return item;
});

list.append(...listItem);
