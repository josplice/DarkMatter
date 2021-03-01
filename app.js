//need to make a function that gets rid of the preloader
window.addEventListener('load', () => {
	const preload = document.querySelector('.preload');
	preload.classList.add('preload-finish');
});

$(function () {
	$('.nav-toggle').on('click', function () {
		$('.overlay-nav').toggleClass('open');
		$('.nav-toggle').toggleClass('open');
	});
});

/* for scrolling of mainhero buttons */
$('.js--scroll-to-plans').click(function () {
	$('html, body').animate(
		{ scrollTop: $('.js--section-carousel').offset().top },
		1000,
	);
});

$('.js--scroll-to-start').click(function () {
	$('html, body').animate(
		{ scrollTop: $('.js--section--features').offset().top },
		2000,
	);
});
$('.js--scroll-to-contactform').click(function () {
	$('html, body').animate(
		{ scrollTop: $('.js--section--contactform').offset().top },
		2000,
	);
});
/*navigation scroll */
$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
				);
				return false;
			}
		}
	});
});

//data src attribute
const images = document.querySelectorAll('[data-src]');
function preloadImage(img) {
	const src = img.getAttribute('data-src');
	if (!src) {
		return;
	}
	img.src = src;
}
const imgOptions = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			preloadImage(entry.target);
			imgObserver.unobserver(entry.target);
		}
	});
}, imgOptions);

images.forEach((image) => {
	imgObserver.observe(image);
});

// scrolling reaveal
window.sr = ScrollReveal();
sr.reveal('#header-wrapper', {
	duration: 3000,
	distance: '100px',
	origin: 'top',
});
sr.reveal('.option1', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('.option2', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 100,
	viewFactor: 0.2,
});
sr.reveal('.option3', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 200,
	viewFactor: 0.2,
});
sr.reveal('.case-study-image', {
	duration: 2000,
	origin: 'top',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('.case-study-text', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('.diagram1', {
	duration: 2000,
	origin: 'bottom',
	distance: '200px',
	viewFactor: 0.2,
});
sr.reveal('.diagram2', {
	duration: 2000,
	origin: 'bottom',
	distance: '200px',
	delay: 500,
	viewFactor: 0.2,
});
sr.reveal('.diagram3', {
	duration: 2000,
	origin: 'bottom',
	distance: '200px',
	delay: 1000,
	viewFactor: 0.2,
});
sr.reveal('.diagram4', {
	duration: 2000,
	origin: 'bottom',
	distance: '200px',
	delay: 1500,
	viewFactor: 0.2,
});

sr.reveal('.v-max-scroll', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	viewFactor: 0.2,
});
sr.reveal('.insight-option1', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	viewFactor: 0.2,
});
sr.reveal('.insight-option2', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 500,
	viewFactor: 0.2,
});
sr.reveal('.insight-option3', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 1000,
	viewFactor: 0.2,
});

//function for scrolling reveal
$(function () {
	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
				);
				return false;
			}
		}
	});
});

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDub5eDE28erUw4ZUsgSa59nynt5apN16k',
	authDomain: 'contact-form-bc467.firebaseapp.com',
	databaseURL: 'https://contact-form-bc467.firebaseio.com',
	projectId: 'contact-form-bc467',
	storageBucket: 'contact-form-bc467.appspot.com',
	messagingSenderId: '258902265586',
	appId: '1:258902265586:web:d8dd0df43ae07d02d9ca6b',
	measurementId: 'G-JS9G2PY5DR',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messages collection

var messagesRef = firebase.database().ref('messages');

//Listern for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
	e.preventDefault();
	var firstName = getInputVal('firstname');
	var lastName = getInputVal('lastname');
	var email = getInputVal('email');
	var company = getInputVal('company');
	var message = getInputVal('message');

	saveMessage(firstName, lastName, email, phone, company, message);

	// show Alert
	document.querySelector('.alert').style.display = 'block';

	//hide alert alert after 3 sec
	setTimeout(function () {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	//clear form
	document.getElementById('contactForm').reset();
}

///function to get form vanlue

function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstName, lastName, company, email, phone, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		firstName: firstName,
		lastName: lastName,
		email: email,
		phone: phone,
		company: company,
		message: message,
	});
}
