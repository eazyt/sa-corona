// Get DOM Elements - EC
const gp_modal = document.querySelector('#gp-modal');
const gp_modalBtn = document.querySelector('#gp_modal-btn');
const gp_closeBtn = document.querySelector('.closeBtn');

// Events
gp_modalBtn.addEventListener('click', openModal);
gp_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  gp_modal.style.display = 'block';
}

// Close
function closeModal() {
  gp_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == gp_modal) {
    gp_modal.style.display = 'none';
  }
}
