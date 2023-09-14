// toggle navbar
$(document).ready(function () {
    $("#hamburgerBtn").click(function () {
      $("#mobileMenu").slideToggle("fast");
    });
  });
  // Check the screen size when the page loads and when it's resized
  $(document).ready(function () {
    $(window).on("resize", function () {
      const $mobileMenu = $("#mobileMenu");
      if ($(window).width() >= 1024) {
        // Adjust the breakpoint as needed (e.g., 1024px for larger screens)
        $mobileMenu.addClass("hidden");
        $mobileMenu.css("display", "none");
      }
    });
  });
  
  // mega menu display
  $(document).ready(function () {
    let menuTimeout;
  
    $(".megaLinks").mouseenter(function () {
      clearTimeout(menuTimeout);
      const menuId = $(this).data("menu");
  
      $(".megaMenu").not("#" + menuId).slideUp('fast'); // Slide up other mega menus
      $("#" + menuId).slideDown('fast'); // Slide down the current mega menu
    });
  
    // When leaving a menu link or the mega menu
    $(".megaLinks, .megaMenu").mouseleave(function () {
      const menuId = $(this).data("menu");
  
      menuTimeout = setTimeout(function () {
        $("#" + menuId).slideUp('fast'); // Slide up the mega menu
      }, 200); // Adjust the delay (in milliseconds) as needed
    });
  
    // When hovering over the mega menu content
    $(".megaMenu").mouseenter(function () {
      clearTimeout(menuTimeout); // Cancel the slide-up timeout
    }).mouseleave(function () {
      const menuId = $(this).attr("id");
      menuTimeout = setTimeout(function () {
        $("#" + menuId).slideUp('fast'); // Slide up the mega menu
      }, 200); // Adjust the delay (in milliseconds) as needed
    });
    
    // Prevent the mega menu from sliding up
    $(".megaMenu").mouseenter(function () {
      clearTimeout(menuTimeout); // Cancel the slide-up timeout
    });
  });
  
  // products array
  const products = [
    {
      imageSrc: "src/images/rumah-1.jpg",
      price: "Rp. 1.1 Miliar",
      title: "Tipe C&D di The Ambawani Residence",
      location: "Cisauk, Tangerang",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-2.jpg",
      price: "Rp. 1.1 Miliar",
      title: "Rumaitha 3 - Tipe 1 di Rumaitha Jati Asih",
      location: "Jati Asih, Bekasi",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-3.jpg",
      price: "Rp. 1.1 Miliar",
      title: "Moderna di Greenleaf Jagakarsa Residence",
      location: "Jakarta Selatan",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-4.jpg",
      price: "Rp. 1.1 Miliar",
      title: "Yuri di Springhill Yume Lagoon",
      location: "Cisauk, Tangerang",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-4.jpg",
      price: "Rp. 800 Juta",
      title: "Tipe Srikandi di Casa Arjuna",
      location: "Bekasi",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-5.jpg",
      price: "Rp. 800 Juta",
      title: "Tipe Srikandi di Casa Arjuna",
      location: "Bekasi",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-6.jpg",
      price: "Rp. 800 Juta",
      title: "Westin di Winston Residence Serpong",
      location: "Serpong, Tangerang",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-7.jpg",
      price: "Rp. 800 Juta",
      title: "Tipe Puglia di Casa Loka Residence",
      location: "Jakarta Pusat",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
    {
      imageSrc: "src/images/rumah-8.jpg",
      price: "Rp. 800 Juta",
      title: "Salima Regency di Salima Regency",
      location: "Jakarta Timur",
      lt: "LT: 72 m<sup>2</sup>",
      lb: "LB: 71 m<sup>2</sup>",
      baths: "3",
      beds: "3",
    },
  ];
  
  // generate product carousel
  function generateProductDisplay(product, index) {
  return `
  <div class="swiper-slide show">
    <a href="" data-product-id="${index}"><img src="${product.imageSrc}" class="rounded-md w-full" alt=""></a>
    <section class="card-desc flex flex-col mt-1">
      <span class="font-semibold text-lg text-blue-500">${product.price}</span>
      <span class="whitespace-nowrap overflow-hidden overflow-ellipsis my-1">${product.title}</span>
      <span class="font-light text-sm text-gray-700">${product.location}</span>
      <br>
      <div class="icons border-t-2 flex gap-4 pt-2 flex-col">
        <div class="building-size flex gap-4">
          <span class="text-gray-500">${product.lt}</span>
          <span class="text-gray-500">${product.lb}</span>
        </div>
        <div class="icons flex gap-4">
          <span class="text-gray-500"><i class="fas fa-bath"> ${product.baths}</i></span>
          <span class="text-gray-500"><i class="fas fa-bed"> ${product.beds}</i></span>
        </div>
      </div>
    </section>
  </div>`;
  };
  
  const productCarouselElement = document.getElementById('productCarousel');
  if (productCarouselElement) {
    let productHTML = "";
    products.forEach(function (product, index) {
      productHTML += generateProductDisplay(product, index);
    });
    productCarouselElement.innerHTML = productHTML;
  }
  
  
  // toggle akunMenu
  $(document).ready(function () {
    function hideAkunMenu() {
      if (window.innerWidth <= 1024) {
        $("#AkunMenu").fadeOut("fast");
      }
    }
    $("#akunDropdown").click(function (e) {
      e.stopPropagation();
      if ($("#AkunMenu").is(":visible")) {
        $("#AkunMenu").fadeOut(500);
      } else {
        $("#AkunMenu").fadeIn(500);
      }
    });
    // Call the function to hide the menu when the page loads
    hideAkunMenu();
    // Add an event listener for the resize event
    $(window).on("resize", function () {
      hideAkunMenu();
    });
  });
  
  // carousel
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".nav-arrow-right",
        prevEl: ".nav-arrow-left",
      },
      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // When window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  });
  