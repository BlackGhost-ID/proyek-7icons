document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Ganti icon menu/close
    const icon = hamburger.querySelector("i");
    icon.setAttribute(
      "data-feather",
      navbar.classList.contains("active") ? "x" : "menu"
    );
    feather.replace();
  });

  // Replace all feather icons
  feather.replace();
});

// Data event contoh, bisa diganti dengan data asli / API
const calendar = document.getElementById("calendar");
const eventDetails = document.getElementById("event-details");

const events = {
  5: "Meeting tim pengembang",
  12: "Peluncuran fitur baru",
  20: "Workshop desain UI",
};

function generateCalendar(days = 30) {
  for (let i = 1; i <= days; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = i;

    if (events[i]) {
      day.classList.add("event-day");
      day.addEventListener("click", () => {
        eventDetails.textContent = `Tanggal ${i}: ${events[i]}`;
        eventDetails.classList.remove("hidden");
      });
    }

    calendar.appendChild(day);
  }
}

generateCalendar();

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".music-card");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".close");

  // Buka modal saat klik card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const albumId = card.dataset.album;
      const modal = document.getElementById(`modal${albumId}`);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Tutup modal saat klik tombol close
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Tutup modal saat klik luar konten
  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
