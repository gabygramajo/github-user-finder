const modalContainer = document.querySelector(".modal-container");
const btnClose = document.querySelector("#btn-close");

modalContainer.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

function closeModal() {
  modalContainer.classList.add('inactive');
}