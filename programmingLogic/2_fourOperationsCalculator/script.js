// Quando o usuário digitar é necessário aparecer na area de resultado
// Pegar os valores digitados pelo usuario
// Fazer as operações básicas
// Retornar o resultado dentro da area resultado

function calculate(event) {
  event.preventDefault();

  let numberOne = parseFloat(document.getElementById("firstNumber").value);
  let numberTwo = parseFloat(document.getElementById("secondNumber").value);

  let sum = numberOne + numberTwo;
  let sub = numberOne - numberTwo;
  let multiplication = numberOne * numberTwo;
  let division = numberOne / numberTwo;
  debugger;

  let myBody = document.getElementById("body");

  let box = document.getElementById("resultBox")?.remove();
  let resultBox = document.createElement("div");

  resultBox.id = "resultBox";

  resultBox.style.position = "absolute";
  resultBox.style.width = "250px";
  resultBox.style.height = "250px";
  resultBox.style.background = "#f5940e";
  resultBox.style.fontSize = "13px";
  resultBox.style.display = "flex";
  resultBox.style.paddingLeft = "20px";
  resultBox.style.flexDirection = "column";
  resultBox.style.borderRadius = "10px";
  resultBox.style.boxShadow = " 2px 2px 2px #000000";
  myBody.style.color = "#151515";

  myBody.style.display = "flex";
  myBody.style.justifyContent = "center";
  myBody.style.alignItems = "end";

  resultBox.innerHTML = `<p><strong>SUM:</strong> ${sum}</p> 
    <p><strong>SUBTRACTION:</strong> ${sub}</p>
    <p><strong>MULTIPLICATION:</strong> ${multiplication}</p>
    <p><strong>DIVISION:</strong> ${division}</p>
    <button type="reset" id='close' style = 'display:flex;width:60px; padding: 5px; margin:20px auto; background-color: #151515; color:#ffffff; justify-content:center; border: 1px solid #000000; border-radius: 3px; box-shadow: 2px 2px 2px #000000'>OK</button>`;

  myBody.prepend(resultBox);

  let buttonClicked = document.getElementById("close");

  buttonClicked.addEventListener("click", () => {
    document.getElementById("resultBox").remove();
    document.getElementById("form").reset();
  });
}

document.getElementById("btn").addEventListener("click", calculate);
