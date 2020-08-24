const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsListItem = ingredients.map(item => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  return listItemRef;
});

document.querySelector('#ingredients').prepend(...ingredientsListItem);
