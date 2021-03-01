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
