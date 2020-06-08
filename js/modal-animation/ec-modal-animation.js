// Get DOM Elements - EC
const ec_modal = document.querySelector('#ec-modal');
const ec_modalBtn = document.querySelector('#ec_modal-btn');
const ec_closeBtn = document.querySelector('.closeBtn');

// Events
ec_modalBtn.addEventListener('click', openModal);
ec_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  ec_modal.style.display = 'block';
}

// Close
function closeModal() {
  ec_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == ec_modal) {
    ec_modal.style.display = 'none';
  }
}
