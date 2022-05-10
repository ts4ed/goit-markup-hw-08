const { height: pageHeaderHeight } = document
  .querySelector('.header .container')
  .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;
