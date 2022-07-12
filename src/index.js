export const paintCards = () => {
  let elements = document.querySelectorAll('.item');
  elements.forEach((elem, index) =>
    index % 2 == 0
      ? (elem.style.backgroundColor = 'red')
      : (elem.style.backgroundColor = 'aqua')
  );
};

export const findElement = () => {
  const firstElement = document.querySelector('.item');
  let nextItem = firstElement.nextElementSibling;
  for (let i = 2; i < document.querySelectorAll('.item').length; i++) {
    nextItem.classList.contains('likedItem')
      ? (nextItem.style.background = 'blue')
      : (nextItem = nextItem.nextElementSibling);
  }
};
