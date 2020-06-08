// Get DOM Elements - EC
const kzn_modal = document.querySelector('#kzn-modal');
const kzn_modalBtn = document.querySelector('#kzn_modal-btn');
const kzn_closeBtn = document.querySelector('.closeBtn');

// Events
kzn_modalBtn.addEventListener('click', openModal);
kzn_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  kzn_modal.style.display = 'block';
}

// Close
function closeModal() {
  kzn_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == kzn_modal) {
    kzn_modal.style.display = 'none';
  }
}
