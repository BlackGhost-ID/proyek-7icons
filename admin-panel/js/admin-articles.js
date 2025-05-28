const articles = [
  { id: 1, title: "Artikel Pertama", author: "Admin", date: "2025-05-01" },
  { id: 2, title: "Artikel Kedua", author: "Admin", date: "2025-05-05" },
];

const tableBody = document.getElementById("article-table-body");
const modal = document.getElementById("article-modal");
const form = document.getElementById("article-form");
const titleInput = document.getElementById("article-title");
const authorInput = document.getElementById("article-author");
const contentInput = document.getElementById("article-content");
const modalTitle = document.getElementById("modal-title");
let editingId = null;

function renderArticles() {
  tableBody.innerHTML = "";
  articles.forEach((article) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${article.title}</td>
      <td>${article.author}</td>
      <td>${article.date}</td>
      <td>
        <button onclick="editArticle(${article.id})">Edit</button>
        <button onclick="deleteArticle(${article.id})">Hapus</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function editArticle(id) {
  const article = articles.find((a) => a.id === id);
  if (article) {
    editingId = id;
    titleInput.value = article.title;
    authorInput.value = article.author;
    contentInput.value = article.content || "";
    modalTitle.textContent = "Edit Artikel";
    modal.classList.remove("hidden");
  }
}

function deleteArticle(id) {
  const index = articles.findIndex((a) => a.id === id);
  if (index !== -1) {
    articles.splice(index, 1);
    renderArticles();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const content = contentInput.value;
  const date = new Date().toISOString().split("T")[0];

  if (editingId) {
    const article = articles.find((a) => a.id === editingId);
    article.title = title;
    article.author = author;
    article.content = content;
    modalTitle.textContent = "Tambah Artikel";
    editingId = null;
  } else {
    articles.push({
      id: Date.now(),
      title,
      author,
      content,
      date,
    });
  }

  form.reset();
  modal.classList.add("hidden");
  renderArticles();
});

document.getElementById("add-article-btn").addEventListener("click", () => {
  editingId = null;
  form.reset();
  modalTitle.textContent = "Tambah Artikel";
  modal.classList.remove("hidden");
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  modal.classList.add("hidden");
});

renderArticles();
