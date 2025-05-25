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
