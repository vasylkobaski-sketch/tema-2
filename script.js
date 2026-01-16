
const duckImage = document.getElementById("duckImage");
const loadDuckBtn = document.getElementById("loadDuck");
const errorText = document.getElementById("error");


async function loadDuck() {
  console.log("🔄 Cerere trimisă către Random Duck API...");
  errorText.textContent = ""; // reset mesaj eroare

  try {
    const response = await fetch("https://random-d.uk/api/v2/random");

    
    if (!response.ok) {
      throw new Error("Răspuns invalid de la server");
    }

    const data = await response.json();
    console.log("✅ Date primite cu succes:", data);

  
    duckImage.src = data.url;

  } catch (error) {
  
    console.error("❌ Eroare la preluarea imaginii:", error);

  
    errorText.textContent =
      "A apărut o eroare la încărcarea imaginii. Te rugăm să încerci din nou.";
  }
}


loadDuckBtn.addEventListener("click", loadDuck);


loadDuck();
