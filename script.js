const wrapper = document.querySelector('.wrapper');
const validUser = { email: "user@example.com", password: "password123" };

function registerActive() {
    wrapper.classList.toggle('active');
}

function loginActive() {
    wrapper.classList.toggle('active');
}

// Login Validation
document.querySelector('.form-wrapper.login form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    if (email === validUser.email && password === validUser.password) {
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password");
    }
});
