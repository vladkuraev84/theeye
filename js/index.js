const input = document.querySelector('.form__text');
const formPlace = document.querySelector('.header__form-place')

input.addEventListener('input', (e) => {

  let text = e.target.value;

  if (text.includes('Dub') || text.includes('dub')) {
    formPlace.style.display = "block";
    formPlace.addEventListener('click', (e) => {
      console.log(e.target.innerText);
      input.value = e.target.innerText;
    })
  }
  if (text.length < 1) {
    formPlace.style.display = 'none';
  }
})