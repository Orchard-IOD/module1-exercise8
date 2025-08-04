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

  // call tests
  testSuite(diceRolls, valContainer, totalDice);
}

// ==============================================
// test suite

function testSuite(diceRolls, valContainer, totalDice) {
  // test returned random value is within selected die range
  if (diceRolls[0] >= 1 || diceRolls[0] <= dieType) {
    console.log("Returned random value is within selected die range");
  }

  // test if displayed dice returned equals the amount of dice rolled
  if ((valContainer.children.length = totalDice)) {
    console.log(
      "the amount of dice displayed is equal to the total dice rolled"
    );
  }
}

// ==============================================
