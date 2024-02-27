const renderizacaoDinamica = document.createElement("div");

renderizacaoDinamica.innerHTML = `
    <h1 id="titulo-calc">Calculadora de carbono</h1><br>
    <p class="text-calc">A calculadora de pegada de carbono é uma ferramenta inovadora que permite a você quantificar a quantidade de gases de efeito estufa que são emitidos como resultado de suas ações cotidianas. Utilize a nossa calculadora para determinar a pegada de carbono associada à sua jornada sustentável.</p><br>
    <button class="button-calc"><a href="html/CalculadoraDeCarbono.html">Calcular</a></button>`;

const calcCarbono = document.querySelector("#box-calc");
calcCarbono.appendChild(renderizacaoDinamica);
console.log(renderizacaoDinamica);
