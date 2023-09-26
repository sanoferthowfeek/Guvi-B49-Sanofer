async function login() {
    let data = {
        email: document.getElementById('loginName').value,
        password: document.getElementById('loginPassword').value
    }
    fetch('https://resetpassword-zen.herokuapp.com/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-Type': "application/json"
            }
        }).then(res => {
            if (res.status == 200) {
                alert("Login successful");
                document.getElementById('loginForm').reset();
            } else if (res.status == 400 || res.status == 401) {
                alert("Invalid Credentials");
                document.getElementById('loginForm').reset();
            }
        })
        .catch(err => console.log("Login function : ", err))

}


function signup() {
    document.getElementById('loginDiv').style.display = "none";
    document.getElementById('registerDiv').style.display = "block";
    document.getElementById('resetDiv').style.display = "none";
}

function forgotpwd() {
    document.getElementById('loginDiv').style.display = "none";
    document.getElementById('registerDiv').style.display = "none";
    document.getElementById('resetDiv').style.display = "block";
}

async function register() {
    //let matchkey = generateRandomString();
    let data = {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    }

    fetch('https://resetpassword-zen.herokuapp.com/register', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-Type': "application/json"
            }
        }).then(res => {
            if (res.status == 200) {
                alert("Registration successful");
                document.getElementById('signupForm').reset();

                //after signup display login page again
                document.getElementById('loginDiv').style.display = "block";
                document.getElementById('registerDiv').style.display = "none";
                document.getElementById('resetDiv').style.display = "none";
            } else {
                alert("Registration Failed");
                document.getElementById('signupForm').reset();
            }
        })
        .catch(err => console.log("registration function : ", err))
}