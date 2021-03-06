(function() {  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5PzDK4gN33neE9ZjXkKcylASXlkXW2QY",
    authDomain: "student-7e884.firebaseapp.com",
    databaseURL: "https://student-7e884.firebaseio.com",
    storageBucket: "student-7e884.appspot.com",
  };
  firebase.initializeApp(config);

  const s_id = document.getElementById('s_id');
  const s_phone = document.getElementById('s_phone');
  const s_name = document.getElementById('s_name');
  const s_school = document.getElementById('s_school');

  const dbRefStudent = firebase.database().ref().child('student');

 //  dbRefStudent.on('value', snap=> {
	// 	students.innerText = JSON.stringify(snap.val(),null,3);
	// });

  dbRefStudent.orderByChild("s_id").equalTo("2014038122").on("child_added", function(snapshot) {
  	var name = snapshot.child('s_name').val();
  	var id = snapshot.child('s_id').val();
  	var phone = snapshot.child('s_phone').val();
  	var school = snapshot.child('s_school').val();
  	var state = snapshot.child('s_state').val();
  	console.log(name);
  	s_id.innerText = id;
  	s_phone.innerText = phone;
  	s_school.innerText = school;
  	s_name.innerText = name;
	});


}());