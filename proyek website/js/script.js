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

const allPopularPosts = [
  { title: "Judul Populer 1", description: "Deskripsi singkat 1", link: "#" },
  { title: "Judul Populer 2", description: "Deskripsi singkat 2", link: "#" },
  { title: "Judul Populer 3", description: "Deskripsi singkat 3", link: "#" },
  { title: "Judul Populer 4", description: "Deskripsi singkat 4", link: "#" },
  { title: "Judul Populer 5", description: "Deskripsi singkat 5", link: "#" },
  { title: "Judul Populer 6", description: "Deskripsi singkat 6", link: "#" },
  { title: "Judul Populer 7", description: "Deskripsi singkat 7", link: "#" },
];

const maxDisplay = 6;
const popularList = document.getElementById("popular-list");

const limitedPosts = allPopularPosts.slice(0, maxDisplay);

limitedPosts.forEach((post) => {
  const li = document.createElement("li");
  li.innerHTML = `
      <a href="${post.link}">${post.title}</a>
      <p>${post.description}</p>
    `;
  popularList.appendChild(li);
});

// Data album untuk modal
document.addEventListener("DOMContentLoaded", function () {
  const albumData = {
    1: { title: "Album 1", tracks: ["Lagu 1", "Lagu 2", "Lagu 3"] },
    2: { title: "Album 2", tracks: ["Track A", "Track B", "Track C"] },
    3: { title: "Album 3", tracks: ["Song X", "Song Y", "Song Z"] },
  };

  document.querySelectorAll(".music-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.album;
      const data = albumData[id];

      document.getElementById("modal-album-title").textContent = data.title;

      const trackList = document.getElementById("album-tracklist");
      if (!trackList) return; // Hindari error jika elemen belum ada

      trackList.innerHTML = "";
      data.tracks.forEach((track) => {
        const li = document.createElement("li");
        li.textContent = track;
        trackList.appendChild(li);
      });

      document.getElementById("album-modal").classList.remove("hidden");
    });
  });

  document.querySelector(".close-button").addEventListener("click", () => {
    document.getElementById("album-modal").classList.add("hidden");
  });

  window.addEventListener("click", function (e) {
    const modal = document.getElementById("album-modal");
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

// Event untuk menutup modal saat klik tombol close
document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("album-modal").classList.add("hidden");
});

// Tutup modal jika klik area luar modal
window.addEventListener("click", function (e) {
  const modal = document.getElementById("album-modal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
