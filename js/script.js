let closeButton = document.querySelector('.modal-close-button');
let modalWindow = document.querySelector('.modal-container');
let bookingButton = document.querySelector('.booking-button');

closeButton.onclick = function () {
  modalWindow.classList.add('visually-hidden');
};

closeButton.onclick = function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove('visually-hidden');
}
