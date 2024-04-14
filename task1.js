function calculateAgeofYours() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    
    var yourage = today.getFullYear() - dob.getFullYear();
    var monthDiffer = today.getMonth() - dob.getMonth();
    
    if (monthDiffer < 0 || (monthDiffer === 0 && today.getDate() < dob.getDate())) {
      yourage--;
    }
    
    document.getElementById('result').innerHTML = 'Your age is: ' + yourage;
  }
  