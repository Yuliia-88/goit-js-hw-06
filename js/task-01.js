/*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.*/

const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

const categoryName = itemRef.forEach((item) => {
  const titleCategory = item.querySelector("h2");
  const listElements = item.querySelectorAll("li");
  console.log(`Category: ${titleCategory.textContent}`);
  console.log(`Elements: ${listElements.length}`);
});