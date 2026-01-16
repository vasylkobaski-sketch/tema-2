const duckImage = document.getElementById("duckImage");
const loadDuckBtn = document.getElementById("loadDuck");
const errorText = document.getElementById("error");


async function loadDuck() {
  console.log("🔄 Cerere trimisă către Random Duck API...");

 
  errorText.textContent = "";

  try {
    
    const response = await fetch("https://random-d.uk/api/v2/random");

    
    const data = await response.json();

    console.log("✅ Date primite cu succes:", data);

    
    duckImage.src = data.url;

  } catch (error) {
    console.error("❌ Eroare la preluarea datelor:", error);

 
    errorText.textContent = "A apărut o eroare la încărcarea imaginii.";
  }
}


loadDuckBtn.addEventListener("click", loadDuck);
loadDuck();