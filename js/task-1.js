const categories = document.querySelector('#categories');
console.log(`У списку ${categories.children.length} категорії.`);

categories.querySelectorAll('.item').forEach(item => {
  console.log(`Категорія: ${item.querySelector('h2').textContent}`);
  console.log(
    `Кількість елементів: ${item.querySelector('ul').children.length}`,
  );
});
