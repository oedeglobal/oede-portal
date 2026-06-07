document.addEventListener('DOMContentLoaded',()=>{
  const page=document.body.dataset.page;
  document.querySelectorAll('.links a').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')});
  const modal=document.querySelector('.modal');
  if(modal){
    const img=modal.querySelector('img');
    document.querySelectorAll('[data-expand]').forEach(el=>el.addEventListener('click',()=>{img.src=el.src;modal.classList.add('active')}));
    modal.querySelector('button').addEventListener('click',()=>modal.classList.remove('active'));
    modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('active')});
  }
});
