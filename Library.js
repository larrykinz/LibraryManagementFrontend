
document.getElementById('staffLoginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:8080/staff/registerStaff', {
        method: 'POST',
        body: JSON.stringify({
            staffUsername: formData.get('staffUsername'),
            staffPassword: formData.get('staffPassword')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    if (result.success) {
        alert('Staff logged in successfully');
    } else {
        alert('Login failed: ' + result.message);
    }
});

 document.getElementById('staffRegisterForm').addEventListener('submit', async (event) => {
     event.preventDefault();

const staffName = formData.get('staffName');
const email = formData.get('email');
const password = formData.get('password');

console.log('Sending data:', { staffName, email, password });

const response = await fetch('http://localhost:8080/staff/registerStaff', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
staffRegUsername: staffName,
staffEmail: email,
staffRegPassword: password
})
});

if (response.ok) {
const data = await response.json();
console.log('Staff registered successfully:', data);
} else {
const errorText = await response.text();
console.error('Failed to register staff:', response.statusText, errorText);
}


document.getElementById('memberLoginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('/Member/signIn', {
        method: 'POST',
        body: JSON.stringify({
            memberUsername: formData.get('memberUsername'),
            memberPassword: formData.get('memberPassword')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    if (result.success) {
        alert('Member logged in successfully');
    
    } else {
        alert('Login failed: ' + result.message);
    }
});

document.getElementById('memberRegisterForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('/Member/registerMember', {
        method: 'POST',
        body: JSON.stringify({
            memberRegUsername: formData.get('memberRegUsername'),
            memberEmail: formData.get('memberEmail'),
            memberRegPassword: formData.get('memberRegPassword')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    if (result.success) {
        alert('Member registered successfully');
    } else {
        alert('Registration failed: ' + result.message);
    }
});

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
function handleLogin(event) {  
    event.preventDefault(); 


    alert('Login successful!');
    

    window.location.href = 'staffActivities.html';
}
 
