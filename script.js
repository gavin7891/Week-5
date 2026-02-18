// Gavin Cousins

function getCounterValue() {
  const counterEl = document.getElementById("counter");
  return Number(counterEl.textContent) || 0;
}

function setCounterValue(val) {
  document.getElementById("counter").textContent = String(val);
}

function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  setCounterValue(getCounterValue() - 1);
}

function runForLoop() {
  const n = getCounterValue();
  let out = [];

  for (let i = 0; i <= n; i++) {
    out.push(i);
  }

  document.getElementById("forLoopResult").textContent = out.join(" ");
}

function showOddNumbers() {
  const n = getCounterValue();
  let out = [];

  for (let i = 1; i <= n; i += 2) {
    out.push(i);
  }

  document.getElementById("oddNumberResult").textContent = out.join(" ");
}

function addMultiplesToArray() {
  const n = getCounterValue();
  let arr = [];

  //  empty array
  for (let i = n; i >= 5; i--) {
    if (i % 5 === 0) {
      arr.push(i);
    }
  }

  // Print the array itself
  console.log(arr);
}

function printCarObject() {
  const cType = document.getElementById("carType").value;
  const cMPG = document.getElementById("carMPG").value;
  const cColor = document.getElementById("carColor").value;

  const carObj = { cType: cType, cMPG: cMPG, cColor: cColor };
  console.log(carObj);
}

function loadCar(which) {
  let srcObj = null;

  if (which === 1) srcObj = carObject1;
  else if (which === 2) srcObj = carObject2;
  else if (which === 3) srcObj = carObject3;

  if (!srcObj) return;

  document.getElementById("carType").value = srcObj.cType;
  document.getElementById("carMPG").value = srcObj.cMPG;
  document.getElementById("carColor").value = srcObj.cColor;
}

function changeColor(which) {
  const p = document.getElementById("styleParagraph");

  if (which === 1) p.style.color = "red";
  else if (which === 2) p.style.color = "green";
  else if (which === 3) p.style.color = "blue";
}
