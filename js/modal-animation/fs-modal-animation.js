// Get DOM Elements - EC
const fs_modal = document.querySelector('#fs-modal');
const fs_modalBtn = document.querySelector('#fs_modal-btn');
const fs_closeBtn = document.querySelector('.closeBtn');

// Events
fs_modalBtn.addEventListener('click', openModal);
fs_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  fs_modal.style.display = 'block';
}

// Close
function closeModal() {
  fs_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == fs_modal) {
    fs_modal.style.display = 'none';
  }
}
