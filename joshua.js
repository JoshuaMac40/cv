const popup = document.querySelector('.popup-wrapper');
const close= document.querySelector('.popup-close');

popup.addEventListener('click',()=>{
  popup.style.display='none';
});
close.addEventListener('click',()=>{
  close.style.display='none';
});
