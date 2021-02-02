function loadTableDataFromSession() {
    let temp = JSON.parse(getDataFromStorage("local", "mavrick_team_list"));
    if(temp && temp.length) {
        teamList = temp;
    }
    populateTheTable();
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