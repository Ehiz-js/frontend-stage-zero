const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const toast = document.getElementById("toast");

	//input
	const fullName = document.getElementById("name").value.trim(); //name is deprecated??
	const email = document.getElementById("email").value.trim();
	const subject = document.getElementById("subject").value.trim();
	const message = document.getElementById("message").value.trim();

	let valid = true;

	//errors
	const errorName = document.getElementById("error-name");
	errorName.textContent = "";
	const errorEmail = document.getElementById("error-email");
	errorEmail.textContent = "";
	const errorSubject = document.getElementById("error-subject");
	errorSubject.textContent = "";
	const errorMessage = document.getElementById("error-message");
	errorMessage.textContent = "";

	//validate szn
	if (!fullName) {
		errorName.textContent = "Please enter your name";
		valid = false;
	}

	if (!email) {
		errorEmail.textContent = "Please enter your email";
		valid = false;
	}

	if (!subject) {
		errorSubject.textContent = "Please enter a subject";
		valid = false;
	}

	if (message.length < 10) {
		errorMessage.textContent = "Please enter a longer message";
		valid = false;
	}

	//toast

	if (valid) {
		toast.style.display = "block";
		//mailto
		const mailtoLink = `mailto:azamegbesamuel@gmail.com?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(
			`Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
		)}`;
		window.location.href = mailtoLink;
		setTimeout(() => {
			toast.style.display = "none";
			form.reset();
		}, 3000);
	}
});
