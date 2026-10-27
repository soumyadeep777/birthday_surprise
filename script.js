
document.addEventListener("DOMContentLoaded", () => {
  // Scroll to memories section
  const surpriseButton = document.getElementById("surpriseButton");

  if (surpriseButton) {
    surpriseButton.addEventListener("click", () => {
      document.getElementById("memories")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Reveal photos
  document.querySelectorAll(".photo-reveal").forEach((button) => {
    button.addEventListener("click", () => {
      const photoCard = button.closest(".photo-card");

      if (photoCard) {
        photoCard.classList.add("revealed");
        button.textContent = "Revealed ❤️";
        button.disabled = true;
      }
    });
  });

  // Create floating hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.textContent = ["❤️", "💕", "💖", "💗", "💝"][
      Math.floor(Math.random() * 5)
    ];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 4s linear, opacity 4s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${window.innerHeight + 80}px) rotate(${Math.random() * 60 - 30}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 4100);
  }

  // Birthday cake interaction
  const cake = document.querySelector(".cake");

  if (cake) {
    cake.style.cursor = "pointer";
    cake.setAttribute("role", "button");
    cake.setAttribute("tabindex", "0");
    cake.setAttribute("aria-label", "Celebrate birthday");

    const celebrate = () => {
      for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
      }

      cake.classList.add("celebrating");
      setTimeout(() => cake.classList.remove("celebrating"), 1000);
    };

    cake.addEventListener("click", celebrate);

    cake.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        celebrate();
      }
    });
  }

  // Love letter toggle
  const letterButton = document.getElementById("letterButton");
  const letter = document.querySelector(".love-letter");

  if (letterButton && letter) {
    letterButton.addEventListener("click", () => {
      const isOpen = letter.classList.toggle("open");

      letterButton.textContent = isOpen
        ? "Close My Letter 💌"
        : "Read My Letter 💌";

      if (isOpen) {
        letter.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        for (let i = 0; i < 8; i++) {
          setTimeout(createHeart, i * 150);
        }
      }
    });
  }

  // Gentle floating hearts in the background
  setInterval(createHeart, 1800);
});
