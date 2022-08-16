const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  const listItem = element.querySelectorAll("li");
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${listItem.length}`);
});
