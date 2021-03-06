(function() {
	const config = {
		apiKey: "AIzaSyAV1XcfKk5BTD63woMPc9Ya_wv3ncWZx-0",
    	authDomain: "authprac-84ac2.firebaseapp.com",
    	databaseURL: "https://authprac-84ac2.firebaseio.com",
    	storageBucket: "authprac-84ac2.appspot.com",
	};
	firebase.initializeApp(config);

	//Get Elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');

	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		//Sign in
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
	});

	btnSignUp.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		//Sign in
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
	});

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		}else {
			console.log('not logged in');
			btnLogout.classList.add('hide');			
		}

	});
}());