 const inputsubmit = document.querySelector('.input-submit');

 function toast({
     title = '',
     message = '',
     type = '',
     duration = 3000
 }) {
     const main = document.getElementById('toast');
     if (main) {
         const toast = document.createElement('div');
         //auto tắty
         const autoRemoveId = setTimeout(function() {
             main.removeChild(toast);
         }, duration + 1000);

         toast.onclick = function(e) {
             if (e.target.closest('.toast__close')) {
                 main.removeChild(toast);
                 clearTimeout(autoRemoveId);
             }
         }
         const icons = {
             success: 'fa-solid fa-circle-check',
             error: 'fa-solid fa-triangle-exclamation'
         }
         const icon = icons[type];
         const delay = (duration / 1000).toFixed(2);

         toast.classList.add('toast', `toast--${type}`);
         toast.style.animation = `slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`;
         toast.innerHTML = `
           <div class="toast__icon">
               <i class="${icon}"></i>
           </div>
           <div class="toast__body">
               <div class="toast__title">${title}</div>
               <div class="toast__mess">${message}</div>
           </div>
           <div class="toast__close">
               <i class="fa-sharp fa-solid fa-xmark"></i>
           </div>
       `;
         main.appendChild(toast);


     }

 }

 // toast({
 //     title: 'Success',
 //     message: 'Font Awesome is hiring a product designer to help us take Shoelace to the next level.',
 //     type: 'warning',
 //     duration: 3000
 // })

 function showSuccessToast() {
     toast({
         title: 'Thành công!',
         message: 'Bạn đã đăng nhập thành công',
         type: 'success',
         duration: 5000
     })
 }


 function showErrorToast() {
     toast({
         title: 'Thất bại',
         message: 'Có lỗi xảy ra. Vui lòng kiểm tra lại',
         type: 'error',
         duration: 5000
     })
 }