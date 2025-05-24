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
const events = {
  "2025-05-02": {
    title: "Rapat Tim",
    description: "Rapat bulanan tim di ruang 401.",
  },
  "2025-05-06": {
    title: "Deadline Proyek",
    description: "Batas akhir pengumpulan dokumen proyek.",
  },
  "2025-05-11": {
    title: "Workshop",
    description: "Workshop design thinking, jam 10 pagi.",
  },
};

const dates = document.querySelectorAll(".date");
const eventInfo = document.getElementById("event-info");

dates.forEach((dateEl) => {
  dateEl.addEventListener("click", () => {
    dates.forEach((d) => d.classList.remove("selected"));
    dateEl.classList.add("selected");

    const dateKey = dateEl.dataset.date;
    if (events[dateKey]) {
      const event = events[dateKey];
      eventInfo.innerHTML = `
          <div class="event-title">${event.title}</div>
          <div class="event-desc">${event.description}</div>
        `;
    } else {
      eventInfo.innerHTML =
        '<p class="no-event">Tidak ada event pada tanggal ini.</p>';
    }
  });
});
