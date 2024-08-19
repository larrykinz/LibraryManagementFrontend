 
document.getElementById('staffLoginForm').addEventListener('submit', async (event) => {  
    event.preventDefault();  

    const formData = new FormData(event.target);  
    const response = await fetch('http://localhost:8080/staff/loginStaff', {  
        method: 'POST',  
        body: JSON.stringify({  
            email: formData.get('email'), 
            password: formData.get('password'), 
        }),  
        headers: {  
            'Content-Type': 'application/json'  
        }  
    });  
    
    const result = await response.json();  
    if (result.success) {  
        alert('Login successful!');  
        window.location.href = 'staffActivities.html';  
    } else {  
        alert('Login failed: ' + result.message);  
    }  
});  
 
document.getElementById('staffRegisterForm').addEventListener('submit', async (event) => {  
    event.preventDefault();

    const formData = new FormData(event.target);  
    const response = await fetch('http://localhost:8080/staff/registerStaff', {  
        method: 'POST',  
        body: JSON.stringify({  
            staffName: formData.get('staffName'),  
            password: formData.get('password'), 
            email: formData.get('email')
        }),  
        headers: {  
            'Content-Type': 'application/json'  
        }  
    });  
    
    const result = await response.json();  
    if (result.success) {  
        alert('Registration successful!');    
    } else {  
        alert('Registration failed: ' + result.message);  
    }  
});