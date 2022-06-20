//selector
const calculation = document.querySelector(".calculation");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//event listener
keys.forEach(key=>
	{key.addEventListener("click",calculate);
});

function calculate(){
	let buttonText = this.innerText;
	if(buttonText==="AC"){
		calculation.innerText = "";
		result.innerText = "0";
			result.style.animation = "";
		calculation.style.animation = "";
		return;
	}

	if(buttonText === "DEL"){
		calculation.textContent = calculation.textContent.substr(0,calculation.textContent.length-1);
		return;
	}

	if(buttonText === "="){
		result.innerText = eval(calculation.innerText);
		result.style.animation = "big 0.5s ease-in-out";
		calculation.style.animation = "small 0.5 ease-in-out";
		result.style.animationFillMode = "forwards";
		calculation.style.animationFillMode = "forwards";
		
		}
	else{
		calculation.textContent += buttonText;
		return;
	}
}

prompt("PLEASE PROVIDE NAME");
alert("WELCOME");









