// Handle user registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;

    try {
      const res = await axios.post('/api/users/register', { name, email, password, phone, profession });
      document.getElementById('message').innerText = res.data.msg;
    } catch (err) {
      document.getElementById('message').innerText = err.response.data.msg || 'Error registering user';
    }
  });
}

// Handle user login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await axios.post('/api/users/login', { email, password });
      document.getElementById('message').innerText = res.data.msg;
      if (res.data.msg === 'Login successful') {
        window.location.href = '/home';
      }
    } catch (err) {
      document.getElementById('message').innerText = err.response.data.msg || 'Error logging in';
    }
  });
}
