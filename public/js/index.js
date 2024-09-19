document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const login_usu = document.getElementById('login_usu').value;
    const senha_usu = document.getElementById('senha_usu').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login_usu, senha_usu })
    });

    if (response.ok) {
        window.location.href = '/dashboard'; 
    } else {
        const errorText = await response.text();
        alert(errorText); 
    }
});
