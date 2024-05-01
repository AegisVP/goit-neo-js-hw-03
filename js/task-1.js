function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

const testTask1 = () => {
  document.getElementById('result').innerHTML = '';
  logOutput(slugify, 'Arrays for begginers'); //  повертає "arrays-for-begginers"
  logOutput(slugify, 'English for developer'); //  повертає "english-for-developer"
  logOutput(slugify, 'Ten secrets of JavaScript'); //  повертає "ten-secrets-of-javascript"
  logOutput(slugify, 'How to become a JUNIOR developer in TWO WEEKS'); //  повертає "how-to-become-a-junior-developer-in-two-weeks"
};
