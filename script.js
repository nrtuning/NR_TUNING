// فرم گارانتی
const form = document.getElementById('warrantyForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', function(e){
  e.preventDefault();
  form.style.display = 'none';
  successMsg.classList.remove('hidden');
});

// منو موبایل
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', ()=>{
  nav.classList.toggle('active');
});