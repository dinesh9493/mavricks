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
    loadTableDataFromSession();
}

function register(formData) {
    teamList.push(formData);
    let temp = JSON.stringify(teamList);
    storeItinLocalOrSessionStorage("session", "mavrick_team_list", temp);
    populateTheTable();
    resetForm();
}