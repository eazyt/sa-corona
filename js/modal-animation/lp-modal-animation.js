// Get DOM Elements - EC
const lp_modal = document.querySelector('#lp-modal');
const lp_modalBtn = document.querySelector('#lp_modal-btn');
const lp_closeBtn = document.querySelector('.closeBtn');

// Events
lp_modalBtn.addEventListener('click', openModal);
lp_closeBtn.addEventListener('click', xcloseModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  lp_modal.style.display = 'block';
  console.log('IT CAN OPEN!!!!');
}

// Close
function xcloseModal() {
  lp_modal.style.display = 'none';
  console.log('IT CAN CLOSE!!!!');
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == lp_modal) {
    lp_modal.style.display = 'none';
  }
}
