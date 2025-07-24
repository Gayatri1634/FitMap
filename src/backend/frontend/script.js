function getWelcomeMessage() {
  fetch('http://127.0.0.1:5000/')
    .then(response => response.text())
    .then(data => {
      document.getElementById('response').innerText = data;
    })
    .catch(error => {
      document.getElementById('response').innerText = 'Error connecting to backend';
    });
}
