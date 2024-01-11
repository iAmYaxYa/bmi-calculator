const height = document.querySelector("#height"),
  weight = document.querySelector("#Weight"),
  calculate = document.querySelector("#cal"),
  result = document.querySelector(".result"),
  under = document.querySelector(".under"),
  normal = document.querySelector(".normal"),
  over = document.querySelector(".over");

height.focus();

calculate.addEventListener("click", () => {
  let h = +height.value;
  let w = +weight.value;
  let cal = (h / 100) * (h / 100);
  let total = w / cal;

  let changeToString = total.toString().slice(0, 4);
  let toNumber = Number(changeToString);
  if (h == "" && w == "") {
    height.style = "border-bottom: 2px solid #ff0000";
    weight.style = "border-bottom: 2px solid #ff0000";
    height.focus();
  } else if (h == "") {
    height.style = "border-bottom: 2px solid #ff0000";
    height.focus();
  } else if (w == "") {
    weight.style = "border-bottom: 2px solid #ff0000";
    weight.focus();
  } else if (isNaN(toNumber)) {
    height.style = "border-bottom: 2px solid orange";
    weight.style = "border-bottom: 2px solid orange";
    height.focus();
  } else {
    result.textContent = `Your BMI is : ${toNumber}`;
    height.style = "border-bottom: 2px solid rgba(0,0,0,0.3)";
    weight.style = "border-bottom: 2px solid rgba(0,0,0,0.3)";
    height.focus();
  }
  if (toNumber < 18.6) {
    under.style = `
          background-color: #f7b3b3;
          color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
          padding: 15px;
          border: 2px solid #ff0000;`;
  } else {
    under.style = `
          background-color: transparent;`;
  }
  if (toNumber > 18.6 && toNumber < 24.9) {
    normal.style = `
          background-color: #b1cdf6;
          color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
          padding: 15px;
          border: 2px solid #0566f8;`;
  } else {
    normal.style = `
          background-color: transparent;`;
  }
  if (toNumber > 24.9) {
    over.style = `
          background-color: #d0f9f4;
          color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
          padding: 15px;
          border: 2px solid #09f4d4;`;
  } else {
    over.style = `
          background-color: transparent;`;
  }
});
