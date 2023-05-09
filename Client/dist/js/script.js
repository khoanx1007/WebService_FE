function checkToken() {
  var token = localStorage.getItem('token');
  if (token) {
    // Nếu có token, hiển thị nội dung đăng xuất
    $('.logout').removeClass('d-none');
    $('.logreg').addClass('d-none');
  } else {
    // Nếu không có token, hiển thị nội dung đăng nhập
    $('.logreg').removeClass('d-none');
    $('.logout').addClass('d-none');
  }
}
$('#logout-btn').click(function() {
  // Xoá token
  localStorage.removeItem('token');
  // f5 trang
  window.location.href = "index.html";
});
$(document).ready(function(){
  checkToken();
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

