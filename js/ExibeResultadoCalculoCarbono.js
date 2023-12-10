document.getElementById("carbon-calculator-form").addEventListener("submit", function(event) {
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