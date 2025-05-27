// /*!
// * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
// * Copyright 2013-2023 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
// */
// //
// // Scripts
// // 

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     //  Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             rootMargin: '0px 0px -40%',
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });



// // Theme switcher
// const themeToggle = document.getElementById("themeSwitcher");
// themeToggle.addEventListener("change", () => {
//   document.body.classList.toggle("dark-mode");
// });
// $(document).ready(function () {
//   // التأكد من أن الصفحة الحالية هي "smart.html"
//   if (window.location.pathname.includes("smart.html")) {
//     $("#themeSwitcher").change(function () {
//       $("body").toggleClass("dark-mode");
//     });
//   }
// });

// // Show more toggle
// function toggleMore(id) {
//   const moreText = document.getElementById(id);
//   if (moreText.classList.contains("hidden")) {
//     moreText.classList.remove("hidden");
//   } else {
//     moreText.classList.add("hidden");
//   }
// }

// // Optional: Animate sections on scroll
// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.animation = "fadeInUp 1s forwards";
//       }
//     });
//   },
//   {
//     threshold: 0.1,
//   }
// );

// document.querySelectorAll(".text, .image").forEach(el => {
//   el.style.opacity = 0;
//   observer.observe(el);
// });

// $(document).ready(function () {
//   $("#toggleTextBtn").click(function () {
//     $("#quoteBox").slideToggle("slow", function () {
//       if ($(this).is(":visible")) {
//         $.get("quote.txt", function (data) {
//           $("#quoteBox").text(data);
//         });
//       }
//     });
//   });

//   $("#toggleJokeBtn").click(function () {
//     $("#jokeBox").slideToggle("slow", function () {
//       if ($(this).is(":visible")) {
//         $.get("joke.txt", function (data) {
//           $("#jokeBox").text(data);
//         });
//       }
//     });
//   });

//   $("#toggleImageBtn").click(function () {
//     $("#funnyImage").fadeToggle("slow");
//   });

//   $(document).ready(function() {
//   $(".toggle-text-btn").click(function() {
//     $(".content-box").slideToggle(600);  // Smooth slideToggle animation for 600ms
//   });
// });

// });

window.addEventListener('DOMContentLoaded', event => {
  const path = window.location.pathname;

  // صفحات smart.html و fun.html
  if (path.includes("smart.html") || path.includes("fun.html")) {
    $(function () {
      // أزرار الاقتباس والنكتة والصورة
      $("#toggleTextBtn").click(function () {
        $("#quoteBox").slideToggle("slow", function () {
          if ($(this).is(":visible")) {
            $.get("quote.txt", function (data) {
              $("#quoteBox").text(data);
            });
          }
        });
      });

      $("#toggleJokeBtn").click(function () {
        $("#jokeBox").slideToggle("slow", function () {
          if ($(this).is(":visible")) {
            $.get("joke.txt", function (data) {
              $("#jokeBox").text(data);
            });
          }
        });
      });

      $("#toggleImageBtn").click(function () {
        $("#funnyImage").fadeToggle("slow");
      });

      $(".toggle-text-btn").click(function () {
        $(".content-box").slideToggle(600);
      });

      // خصائص صفحة smart فقط
      if (path.includes("smart.html")) {
        // تبديل الثيم
        $("#themeSwitcher").change(function () {
          $("body").toggleClass("dark-mode");
        });

        // رسالة ترحيب مباشرة
        $("#username").keyup(function () {
          let name = $(this).val();
          if (name) {
            $("#greeting").html("Hello, " + name + "! I See You <span class='emoji-small'>👀</span>");
          } else {
            $("#greeting").html("Welcome! <span class='emoji-small'>🌟</span>");
          }
        });

        // تأثير hover
        $("#greeting").hover(
          function () {
            $(this).css("color", "#ff4500").css("font-weight", "bold");
          },
          function () {
            $(this).css("color", "").css("font-weight", "");
          }
        );

        // أنيميشن عند الضغط
        $("#greeting").click(function () {
          $(this).fadeOut(300).fadeIn(300);
        });
      }
    });
  }

  // صفحة about.html
  if (path.includes("about.html")) {
    // Theme switcher
    const themeToggle = document.getElementById("themeSwitcher");
    if (themeToggle) {
      themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
      });
    }

    // Show more sections
    window.toggleMore = function (id) {
      const moreText = document.getElementById(id);
      if (moreText) {
        moreText.classList.toggle("hidden");
      }
    };

    // Scroll animation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 1s forwards";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".text, .image").forEach(el => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  }
});
