function handleTime() {
	const timeMs = Date.now();
	const timeP = document.querySelector("#time-p");
	timeP.innerHTML = `${timeMs}<br> milliseconds`;
}

document.addEventListener("DOMContentLoaded", handleTime);
