let display = document.getElementById("display");


let buttons = Array.from(document.getElementsByClassName("button"));


console.log(display)


console.log(document.getElementsByClassName("button"));


console.log(buttons)


buttons.map((button) => {
    button.addEventListener("click", (event) => {
        switch (event.target.innerText){
            case "C":
            display.innerText = "";
            break;
            case "=":
				try {
					display.innerText = eval(display.innerText);
				} catch {
					display.innerText = "Error";
				}
				break;
                case "←":
                    if (display.innerText) {
                        display.innerText = display.innerText.slice(0, -1);
                    }
                    break;

            default:
                display.innerText = display.innerText + event.target.innerText;
        }
    })
})