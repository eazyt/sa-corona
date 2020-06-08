// Get DOM Elements - EC
const nw_modal = document.querySelector('#nw-modal');
const nw_modalBtn = document.querySelector('#nw_modal-btn');
const nw_closeBtn = document.querySelector('.closeBtn');

// Events
nw_modalBtn.addEventListener('click', openModal);
nw_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  nw_modal.style.display = 'block';
}

// Close
function closeModal() {
  nw_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == nw_modal) {
    nw_modal.style.display = 'none';
  }
}
