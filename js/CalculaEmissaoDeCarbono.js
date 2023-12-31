// Função para calcular a emissão de carbono
function calculateCarbonEmission(transport, distance, people, events) {
    // Definir as emissões de carbono por km para cada tipo de transporte
    var emissionPerKm = {
        "car": 0.12, // 0.12 kg CO2 por km
        "bus": 0.08, // 0.08 kg CO2 por km
        "train": 0.06, // 0.06 kg CO2 por km
        "plane": 0.25 // 0.25 kg CO2 por km
    };

    // Calcular a emissão de carbono do transporte
    var transportEmission = emissionPerKm[transport] * distance;

    // Calcular a emissão de carbono dos eventos
    var eventEmission = events * 0.1; // Supondo que cada evento emite 0.1 kg de CO2

    // Calcular a emissão total de carbono
    var totalEmission = (transportEmission + eventEmission) * people;

    return totalEmission;
}

document.getElementById("carbon-calculator-form").addEventListener("click", function(event) {
    event.preventDefault();
  
    var transport = document.getElementById("transport-select").value;
    var distance = document.getElementById("distance-input").value;
    var people = document.getElementById("people-input").value;
    var events = document.getElementById("events-input").value;
  
    var emission = calculateCarbonEmission(transport, distance, people, events);
    console.log(emission);
    
    document.getElementById("result").textContent = "Emissão de carbono: " + emission + " kg CO2";
  });
  
  document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("transport-select").value = '';
    document.getElementById("distance-input").value = '';
    document.getElementById("people-input").value = '';
    document.getElementById("events-input").value = '';
    document.getElementById("result").textContent = '';
  });