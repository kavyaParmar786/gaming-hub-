function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function copyManifest() {
  const text = document.getElementById("manifest").innerText;
  navigator.clipboard.writeText(text);
  alert("Manifest copied!");
}

function searchItems() {
  const value = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block" : "none";
  });
}