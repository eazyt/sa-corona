// Get DOM Elements - EC
const mp_modal = document.querySelector('#mp-modal');
const mp_modalBtn = document.querySelector('#mp_modal-btn');
const mp_closeBtn = document.querySelector('.closeBtn');

// Events
mp_modalBtn.addEventListener('click', openModal);
mp_closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  mp_modal.style.display = 'block';
  console.log('IT CAN OPEN-MP');
}

// Close
function closeModal() {
  mp_modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == mp_modal) {
    mp_modal.style.display = 'none';
  }
}
