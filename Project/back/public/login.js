async function resetpassword() {
    document.getElementById('divemail').style.display = "none";
    document.getElementById('codediv').style.display = "block";
    document.getElementById('newpassworddiv').style.display = "none";
    document.getElementById('submitcode').style.display = "block";
    document.getElementById('setnewpassword').style.display = "none";
    document.getElementById('sendmail').style.display = "none";
    let macthingkey = generateRandomString();

    let data = {
        email: document.getElementById('confirmemail').value,
        keytomail: macthingkey
    };

    try {
        let email = await fetch("https://resetpassword-zen.herokuapp.com/sendemail", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (email.status === 200) {
            alert("Mail Sent!!");
        } else if (email.status === 402) {
            alert("User doesn't exist");
            window.location.href = "https://resetpassword-zen.herokuapp.com/"
        } else if (email.status === 401) {
            alert("Error occured while sending email");
            window.location.href = "https://resetpassword-zen.herokuapp.com/"
        } else {
            alert("Couldn't send mail!!");
            window.location.href = "https://resetpassword-zen.herokuapp.com/"
        }
    } catch (err) {
        console.log("mail function  :", err);
    }
}

async function codecheck() {
    let data = {
        code: document.getElementById('key').value
    }

    let fetchdata = fetch('https://resetpassword-zen.herokuapp.com/code', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status == 200) {
            document.getElementById('divemail').style.display = "none";
            document.getElementById('codediv').style.display = "none";
            document.getElementById('newpassworddiv').style.display = "block";
            document.getElementById('submitcode').style.display = "none";
            document.getElementById('setnewpassword').style.display = "block";
            document.getElementById('sendmail').style.display = "none";
            alert("Verification Successful")
        } else {
            alert("Verification Unsuccessful")
        }
    }).catch(err => console.log("Verification function : " + err))
}

async function changepassword() {
    let newpassword = document.getElementById('newpassword').value;
    let email = document.getElementById('newpwdemail').value;
    let data = {
        "email": email,
        "password": newpassword
    }
    fetch('https://resetpassword-zen.herokuapp.com/resetpassword', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(res => {
        if (res.status == 200) {
            alert("Password updated!!");
            window.location.href = "https://resetpassword-zen.herokuapp.com/"
        } else if (res.status == 401) {
            alert("Email doesn't exist !!");
        } else {
            alert("Password updation failed");
        }
    }).catch(err => console.log("Update password function : ", err));
}

function generateRandomString() {
    let str = Math.random().toString(36).substring(7);
    return str;
}

window.onload = () => {
    document.getElementById('loginDiv').style.display = "block";
    document.getElementById('registerDiv').style.display = "none";
    document.getElementById('resetDiv').style.display = "none";
}