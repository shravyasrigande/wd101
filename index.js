document.addEventListener('DOMContentLoaded', function() {
    loadSavedData();
  });
  
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptTerms = document.getElementById('acceptTerms').checked;
  
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
  
    if (age < 18 || age > 55) {
      alert('You must be between 18 and 55 years old to register.');
      return;
    }
    saveDataToStorage(name, email, password, dob, acceptTerms);
    loadSavedData(); 
  }
  
  function saveDataToStorage(name, email, password, dob, acceptTerms) {
    var userData = {
      name: name,
      email: email,
      password: password,
      dob: dob,
      acceptTerms: acceptTerms
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  
  function loadSavedData() {
    var userData = localStorage.getItem('userData');
    var tableBody = document.querySelector('#userData tbody');
    tableBody.innerHTML = '';
  
    if (userData) {
      userData = JSON.parse(userData);
      var newRow = document.createElement('tr');
      newRow.innerHTML = `<td>${userData.name}</td>
                          <td>${userData.email}</td>
                          <td>${userData.password}</td>
                          <td>${userData.dob}</td>
                          <td>${userData.acceptTerms ? 'True' : 'False'}</td>`;
      tableBody.appendChild(newRow);
    }
  }
