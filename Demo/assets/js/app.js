var teamList = [];
var formValidity = {
    "firstName": false,
    "lastName": false,
    "phone": false,
    "email": false,
    "about": false,
    "profile": false,
};

initiate();

function initiate() {
    document.getElementById('year').innerHTML = new Date().getFullYear();
}

function validateForm() {
    if (formValidity.firstName && formValidity.lastName && formValidity.phone && formValidity.email && formValidity.about && document.getElementById('profile').files.length) {
        fetchFormDetails();
    } else {
        alert("Kindly check the form");
    }
}

function register(formData) {
    teamList.push(formData);
    populateTheTable();
    resetForm();

}

function fetchFormDetails() {
    let obj = {
        "firstName": document.getElementById('firstName').value,
        "lastName": document.getElementById('lastName').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "about": document.getElementById('about').value,
        "profile": document.getElementById('profile').value,
    };
    let file = document.getElementById('profile').files[0];
    let url = '';
    let fileData = new FileReader();
    fileData.onload = function (e) {
        url = e.target.result;
        obj.url = url;
        register(obj);
    };
    fileData.onerror = function (e) {
        obj.url = '';
        register(obj);
    };
    fileData.readAsDataURL(file);
}

function populateTheTable() {
    let tableData = '';
    for (let i = 0; i < teamList.length; i++) {
        tableData += `<tr>
                <td>${teamList[i].lastName}, ${teamList[i].firstName}</td>
                <td>${teamList[i].email}</td>
                <td>${teamList[i].phone}</td>
                <td>${teamList[i].about}</td>
                <td><img class="profile-image" src="${teamList[i].url}" /></td>
         </tr>`;
    }
    document.getElementById('mavrick-table-body').innerHTML = tableData;
    document.getElementById('total-team-members').innerHTML = teamList.length;
}

function resetForm() {
    document.getElementById('registration-form').reset();
}

function validateFirstName(ele) {
    let validity = ele.target.checkValidity();
    validateOptimizer(validity, ele.target, 'firstName');
}

function validateLastName(ele) {
    let validity = ele.target.checkValidity();
    validateOptimizer(validity, ele.target, 'lastName');
}
function validateEmail(ele) {
    let validity = ele.target.checkValidity();
    let regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let pattern = regx.test(ele.target.value);
    validateOptimizer(validity, ele.target, 'email', pattern);
    validatePattern(pattern, ele.target, 'email');
}
function validatePhone(ele) {
    let validity = ele.target.checkValidity();
    let regx = /^[0-9]{10}$/;
    let pattern = regx.test(ele.target.value);
    validateOptimizer(validity, ele.target, 'phone');
    validatePattern(pattern, ele.target, 'phone');
}
function validateAbout(ele) {
    let validity = ele.target.checkValidity();
    validateOptimizer(validity, ele.target, 'about');
}
function validateProfile(ele) {
    let validity = ele.target.checkValidity();
    validateOptimizer(validity, ele.target, 'profile');
}

function validateOptimizer(validity, target, fieldName) {
    if (validity) {
        formValidity[fieldName] = true;
        target.style.borderColor = "#000";
    } else {
        formValidity[fieldName] = false;
        target.style.borderColor = "red";
    }
}

function validatePattern(pattern, target, fieldName) {
    if (pattern) {
        formValidity[fieldName] = true;
        target.style.borderColor = "#000";
    } else {
        formValidity[fieldName] = false;
        target.style.borderColor = "red";
    }
}