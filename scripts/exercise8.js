// ==============================================
// handle dice roll

function handleRoll(dieType, totalDice) {

  // get element to display result
  const valContainer = document.getElementById("rollResult");

  // set global diceRoll empty array
  const diceRolls = [];

  // empty display container
  valContainer.innerText = "";

  // generate random value from dieType
  for (let i = 0; i < totalDice; i++) {
    const randVal = Math.ceil(Math.random() * dieType);
    diceRolls.push(randVal);
  }

  // display randVals to the screen
  diceRolls.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    valContainer.appendChild(span);
  });

}