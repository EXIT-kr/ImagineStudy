(function () {
	const config = {
		apiKey: "AIzaSyD5PzDK4gN33neE9ZjXkKcylASXlkXW2QY",
    	authDomain: "student-7e884.firebaseapp.com",
    	databaseURL: "https://student-7e884.firebaseio.com",
    	storageBucket: "student-7e884.appspot.com",
	};
	firebase.initializeApp(config);

	//Get Elements
	const students = document.getElementById('student');
	const ulList = document.getElementById('list');

	//Create Reference
	const dbRefObject = firebase.database().ref().child('student');
	
	dbRefObject.on('value', snap=> {
		students.innerText = JSON.stringify(snap.val(),null,3);
	});
	dbRefObject.on('child_added', snap => {
		var li = document.createElement('li');
		li.innerText = snap.child('name').val();
		li.id = snap.key;
		ulList.appendChild(li);
	});

	dbRefObject.on('child_changed', snap => {
		var liChanged = document.getElementById(snap.key);
		liChanged.innerText = snap.val();
	});

	dbRefObject.on('child_removed', snap => {
		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
	});

}());