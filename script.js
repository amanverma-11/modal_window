'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Use click on the cross icon to close the modal
btnCloseModal.addEventListener('click', closeModal);
// Use click on the anywhere on screen to close the modal
overlay.addEventListener('click', closeModal);
// Use Escape key to close the modal --> Any key event is a global event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
