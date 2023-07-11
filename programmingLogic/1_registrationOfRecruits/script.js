function registrationOfRecruits(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const yearOfBirth = document.getElementById("yearOfBirthUser").value;
  const fieldOfAction = document.getElementById("fieldOfActionUser").value;
  const city = document.getElementById("cityUser").value;
  const state = document.getElementById("stateUser").value;

  let currentYear = new Date().getFullYear();
  let age = 0;
  if (yearOfBirth < currentYear) {
    age = currentYear - yearOfBirth;
  } else {
    alert("Invalid year of birth.");
  }

  let button = document.getElementById("submitBtn");

  button.addEventListener("click", () => {
    //When clicking on the button, a new '<div>' element called newElement will be created,
    //which will store the calculation result and the updated information of the players.

    let myBody = document.getElementById("body");

    let newElement = document.createElement("div");
    newElement.id = "newElement";

    //Styling result box (newElement)
    newElement.style.position = "absolute";
    newElement.style.width = "340px";
    newElement.style.height = "330px";
    newElement.style.color = "#ffffff";
    newElement.style.background = "#1a521b";
    newElement.style.fontSize = "17px";
    newElement.style.display = "flex";
    newElement.style.paddingLeft = "20px";
    newElement.style.flexDirection = "column";
    newElement.style.borderRadius = "10px";
    newElement.style.boxShadow = " 1px 1px 2px 2px #060606";
    newElement.style.padding = "20px";

    myBody.style.display = "flex";
    myBody.style.justifyContent = "center";
    myBody.style.alignItems = "center";

    //Inserting the content that will go inside the box
    button = newElement.innerHTML = `<h3><strong>DADOS DO RECRUTA</strong></h3> 
        <p><strong>Nome:</strong> ${username}</p> <span><strong>Idade:</strong> ${age}</span> <p><strong>Campo de atuação:</strong> ${fieldOfAction}</p> 
        <span><strong>Cidade:</strong> ${city}</span> <p><strong>Estado:</strong> ${state}</p> 
        <button type="reset" id='butt' style = 'display:flex;width:60px; padding: 5px; margin:20px auto; background-color: #ffffff; color:#000000; justify-content:center; box-shadow: 2px 2px 2px #000000'>OK</button>`;

    let inner = myBody.prepend(newElement); //The newElement element is inserted into the body of the document.

    //A click event listener is added to the button with id 'butt'
    const clickButton = document.getElementById("butt");

    clickButton.addEventListener("click", () => {
      //When the button is clicked newElement will be removed and the form fields will be reset.
      const destroy = document.getElementById("newElement");
      destroy.remove();

      const clearForm = document.getElementById("form");
      clearForm.reset();
    });
  });
}

document
  .getElementById("form")
  .addEventListener("submit", registrationOfRecruits);
