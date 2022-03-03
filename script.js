const button = document.getElementsByClassName("button");
let TipPercent;

for (let bt of button) {
  bt.addEventListener("click", (event) => {
    TipPercent = event.target.value;
  });
}

function BillFormHandler() {
  const { BillTotal, NoOfPeople } = getInputs();
  let billTotal = parseFloat(BillTotal);
  let noofpeople = parseFloat(NoOfPeople);
  let tippercent;
  console.log(TipPercent);
  if (TipPercent === "custom") {
    tippercent = document.getElementById("input-modal").value;
    tippercent = tippercent / 100;
  } else {
    tippercent = parseFloat(TipPercent);
  }
  console.log(tippercent);
  let TipAmount = (tippercent * billTotal) / noofpeople;
  let totalperson = ((tippercent + 1) * billTotal) / noofpeople;
  document.getElementById("TipAmount").innerHTML = "$ " + TipAmount.toFixed(2);
  document.getElementById("TotalPerson").innerHTML =
    "$ " + totalperson.toFixed(2);
}

function reset() {
  document.getElementById("input-bill").value = null;
  document.getElementById("no-of-people").value = null;
  document.getElementById("TipAmount").innerHTML = "$ 0.00";
  document.getElementById("TotalPerson").innerHTML = "$ 0.00";
}

function getInputs() {
  let BillTotal = document.getElementById("input-bill").value;
  let NoOfPeople = document.getElementById("no-of-people").value;
  return { BillTotal, NoOfPeople };
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  closemodal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    closemodal();
  }
};

function closemodal() {
  modal.style.display = "none";
}
