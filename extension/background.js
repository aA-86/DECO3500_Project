const newPageLoad = async () => {
    const popupDiv = document.createElement("div");
    popupDiv.style.position = "absolute";
    const inputRect = input.getBoundingClientRect();
    popupDiv.style.left = inputRect.left + "px";
    popupDiv.style.top = inputRect.top - (inputRect.height + 120) + "px";
    popupDiv.style.backgroundColor = "white";
    popupDiv.style.width = "250px";
    popupDiv.style.height = "120px";
    popupDiv.style.padding = "10px";
    popupDiv.style.borderRadius = "5px";
    popupDiv.style.border = "solid 1px black";

    const title = document.createElement("p");
    title.innerText = "Enter password for this page";

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";

    const addPasswordButton = document.createElement("button");
    addPasswordButton.innerText = "Add password";

    const goAwayButton = document.createElement("button");
    goAwayButton.innerText = "fuck off";
    goAwayButton.addEventListener("click", () => {
        popupDiv.remove();
    });

    popupDiv.appendChild(title);
    popupDiv.appendChild(passwordInput);
    popupDiv.appendChild(addPasswordButton);
    popupDiv.appendChild(goAwayButton);

    document.body.appendChild(popupDiv);
}