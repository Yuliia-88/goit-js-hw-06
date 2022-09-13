const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.*/

const ingredientsListRef = document.querySelector("#ingredients");

const elementsRef = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
});

ingredientsListRef.append(...elementsRef);

// console.log(ingredientsListRef);