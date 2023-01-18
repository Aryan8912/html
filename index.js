document.getElementById("myBtn").addEventListener("click", function(){
    // your code here 
});
let table = document.getElementById("comparison-table");

for (let i = 1; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].onmouseover = function () {
            table.rows[i].style.backgroundColor = "lightblue";
        };
        table.rows[i].cells[j].onmouseout = function () {
            table.rows[i].style.backgroundColor = "";
        };
    }
}
const button = document.createElement('button');
button.innerHTML = 'Click Me';

button.addEventListener('click', () => {
    alert('Button was clicked!');
});

document.body.appendChild(button);
const form = document.getElementById('contact-form');
const messageSuccess = document.getElementById('message-success');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form validation here

    // Submit form data to server
    // Use fetch or XMLHttpRequest to send data to server

    // Show success message
    messageSuccess.style.display = 'block';
});

