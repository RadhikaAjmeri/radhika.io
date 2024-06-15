
const firebaseConfig = {
    apiKey: "AIzaSyD225xoFe642DSa9D7XGlQusVqd97O1i4U",
    authDomain: "spheric-radio-412805.firebaseapp.com",
    databaseURL: "https://spheric-radio-412805-default-rtdb.firebaseio.com",
    projectId: "spheric-radio-412805",
    storageBucket: "spheric-radio-412805.appspot.com",
    messagingSenderId: "171995229326",
    appId: "1:171995229326:web:f99dd9fdab1e45eac6eddf",
    measurementId: "G-YPQQT74X1T"
    //   copy your firebase config informations
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var feedbackformsDB = firebase.database().ref("feedbackforms");
  
  document.getElementById("feedbackforms").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    
    console.log(fname,lname);
  
    saveMessages(fname, lname);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("feedbackforms").reset();
  }
  
  const saveMessages = (fname, lname) => {
    var newfeedbackForm = feedbackformdbFormDB.push();
  
    newfeedbackForm.set({
      fname: fname,
      lname: lname,
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  