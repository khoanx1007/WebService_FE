$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin:15,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#login-form').submit(function(event) {
        event.preventDefault();
    
        var username = $('#username').val();
        var password = $('#password').val();
    
        if (username === '') {
          $('#username').addClass('is-invalid');
          return;
        } else {
          $('#username').removeClass('is-invalid');
        }
    
        if (password === '') {
          $('#password').addClass('is-invalid');
          return;
        } else {
          $('#password').removeClass('is-invalid');
        }
    
        if (username === 'admin' && password === 'admin123') {
          $('#error-message').addClass('d-none');
          alert('Đăng nhập thành công!');
        } else {
          $('#error-message').removeClass('d-none');
        }
      });
      $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').show();
      }, function() {
        $(this).find('.dropdown-menu').hide();
      });
  
      $('.dropdown-item').hover(function() {
        $(this).css('color', '#17a2b8');
      }, function() {
        $(this).css('color', '');
      });
});
document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.navbar-collapse .rounded-circle');
  var dropdownMenu = document.querySelector('.dropdown-m');
  
  dropdownToggle.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdownMenu.classList.toggle('show');
  });
  
  document.addEventListener('click', function(event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove('show');
      }
  });
});
function loadPDF(url) {
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  const container = document.getElementById('pdf-container');

  pdfjsLib.getDocument(url).promise.then(function (pdf) {
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      pdf.getPage(pageNum).then(function (page) {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);

        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
          canvasContext: context,
          viewport: viewport,
        });
      });
    }
  });
}
loadPDF('dist/chuthong1.pdf');
