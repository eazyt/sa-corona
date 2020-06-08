// Get DOM Elements - EC
const nc_modal = document.querySelector('#nc-modal');
const nc_modalBtn = document.querySelector('#nc_modal-btn');
const nc_closeBtn = document.querySelector('.closeBtn');

// Events
nc_modalBtn.addEventListener('click', openModal);
nc_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  nc_modal.style.display = 'block';
  // console.log('IT CAN OPEN!!!');
}

// Close
function closeModal() {
  nc_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == nc_modal) {
    nc_modal.style.display = 'none';
  }
}
