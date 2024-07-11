redirectToLogin = () => {
    alert('Redirecting to login page...');
    window.location.href = './login.html'; // Replace with your login page URL
};

validate = () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const mobilePhoneNumber = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return false;
    }

    const profile = {
        firstName: firstName,
        lastName: lastName,
        mobilePhoneNumber: mobilePhoneNumber,
        email: email,
        password: password,
    };

    alert(`Profile Details: ${JSON.stringify(profile)}`);
    redirectToLogin();
    return false;
};