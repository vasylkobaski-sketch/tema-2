const duckImage = document.getElementById("duckImage");
const errorEl = document.getElementById("error");
const btn = document.getElementById("loadDuck");

async function loadDuck() {
  console.log("Cerere trimisă către Random Duck API...");
  errorEl.textContent = "";

  try {
    const response = await fetch("https://random-d.uk/api/v2/random");
    const data = await response.json();
    console.log("Date primite cu succes:", data);

    duckImage.src = data.url;

  } catch (error) {
    console.error("Eroare la preluarea datelor:", error);
    errorEl.textContent = "Nu s-a putut încărca imaginea.";
  }
}

btn.addEventListener("click", loadDuck);
loadDuck();
