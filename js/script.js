document.addEventListener("DOMContentLoaded", function () {

  /* ================= COOKIE SYSTEM ================= */
  const cookieBanner = document.getElementById("cookieBanner");

  if (cookieBanner) {
    // Show only if not already chosen
    if (!localStorage.getItem("cookiesChoice")) {
      cookieBanner.style.display = "flex";
    } else {
      cookieBanner.classList.add("hidden");
    }
  }

  /* ================= SLIDESHOW ================= */
  const slides = document.querySelectorAll('.slideshow-container .slide');

  if (slides.length > 0) {
    let current = 0;

    slides.forEach(slide => slide.style.display = "none");
    slides[0].style.display = "block";

    setInterval(() => {
      slides[current].style.display = "none";
      current = (current + 1) % slides.length;
      slides[current].style.display = "block";
    }, 3000); // smoother timing
  }

  /* ================= FAQ ================= */
  const items = document.querySelectorAll(".faq-item");

  if (items.length > 0) {
    items.forEach(item => {
      const btn = item.querySelector(".faq-question");

      btn.addEventListener("click", () => {
        items.forEach(i => {
          if (i !== item) {
            i.classList.remove("active");
            const ans = i.querySelector(".faq-answer");
            if (ans) ans.style.maxHeight = null;
          }
        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if (item.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = null;
        }
      });
    });
  }

  /* ================= CONTACT FORM ================= */
  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("success-popup");

  if (form && popup) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      popup.classList.remove("hidden");
      form.reset();
    });
  }

});


/* ================= COOKIE BUTTON FUNCTIONS ================= */
function acceptCookies() {
  localStorage.setItem("cookiesChoice", "accepted");
  document.getElementById("cookieBanner")?.classList.add("hidden");
}

function declineCookies() {
  localStorage.setItem("cookiesChoice", "declined");
  document.getElementById("cookieBanner")?.classList.add("hidden");
}

function essentialCookies() {
  localStorage.setItem("cookiesChoice", "essential");
  document.getElementById("cookieBanner")?.classList.add("hidden");
}


/* ================= POPUP CLOSE ================= */
function closePopup() {
  document.getElementById("success-popup")?.classList.add("hidden");
}