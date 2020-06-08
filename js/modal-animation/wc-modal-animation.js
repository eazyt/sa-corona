// Get DOM Elements - EC
const wc_modal = document.querySelector('#wc-modal');
const wc_modalBtn = document.querySelector('#wc_modal-btn');
const wc_closeBtn = document.querySelector('.closeBtn');

// Events
wc_modalBtn.addEventListener('click', openModal);
wc_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  wc_modal.style.display = 'block';
  console.log('IT WORKS!!');
}

// Close
function closeModal() {
  wc_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == wc_modal) {
    wc_modal.style.display = 'none';
  }
}
