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

const articles = Array.from({ length: 26 }, (_, i) => ({
  title: `Judul Artikel ${i + 1}`,
  desc: `Ini adalah deskripsi singkat dari artikel ke-${i + 1}.`,
  img: "https://placehold.co/600x300",
}));

const section = document.getElementById("article-section");
const pagination = document.getElementById("pagination-controls");

function getItemsPerPage(page) {
  return page === 1 ? 6 : 10;
}

function renderArticles(page = 1) {
  section.innerHTML = "";
  const startIndex = page === 1 ? 0 : 6 + (page - 2) * 10;
  const endIndex = startIndex + getItemsPerPage(page);
  const items = articles.slice(startIndex, endIndex);

  items.forEach((item) => {
    section.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="#" class="btn">Baca Selengkapnya</a>
      </div>
    `;
  });

  renderPagination(page);
}

function renderPagination(activePage = 1) {
  const totalPages = Math.ceil(
    articles.length <= 6 ? 1 : 1 + Math.ceil((articles.length - 6) / 10)
  );

  pagination.innerHTML = "";

  if (activePage > 1) {
    pagination.innerHTML += `<a href="#" data-page="${
      activePage - 1
    }">&laquo; Prev</a>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<a href="#" class="${
      i === activePage ? "active" : ""
    }" data-page="${i}">${i}</a>`;
  }

  if (activePage < totalPages) {
    pagination.innerHTML += `<a href="#" data-page="${
      activePage + 1
    }">Next &raquo;</a>`;
  }

  document.querySelectorAll(".pagination-controls a").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const page = parseInt(el.getAttribute("data-page"));
      renderArticles(page);
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderArticles(1);
});
