//navv bar
const header = document.querySelector("header");
      const menuToggler = document.querySelectorAll("#menu_toggle");

      menuToggler.forEach(toggler => {
        toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
      });
//ganti nama button dan Mengembalikan hover
     function toggleText() {
        // Mengambil elemen button
        var button = document.getElementById("menu_toggle");

        // Menyimpan gaya asli
        var originalBackground = button.style.background;
        var originalColor = button.style.color;
        var originalPadding = button.style.padding;
        var originalWidht = button.style.width;
        // Mengambil elemen button berdasarkan ID
        var button = document.getElementById("menu_toggle");

        // Mengecek teks saat ini dan mengubahnya
        if (button.innerHTML === "Menu") {
            button.innerHTML = "Back";
        } else {
            button.innerHTML = "Menu";
        }
        // Set gaya hover secara manual saat tombol diklik
        button.style.background = "transparent";
        button.style.color = "#777";
        button.style.padding = "6px 6px";
        button.style.width = "90px";

        // Mengembalikan gaya ke keadaan semula setelah 500ms
        setTimeout(function() {
            button.style.backgroundColor = originalBackground;
            button.style.color = originalColor;
            button.style.padding = originalPadding;
            button.style.width = originalWidht;
        }, 400); // Waktu untuk menampilkan efek hover (dapat disesuaikan)
    }
// FAQ Menu
const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
//Scrol Up button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "flex";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });