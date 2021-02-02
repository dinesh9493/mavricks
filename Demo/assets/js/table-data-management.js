function loadTableDataFromSession() {
    let temp = JSON.parse(getDataFromStorage(storageType, keyNameOftableDataInStorage));
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
                <td><div class="trash-icon" onclick="deleteRow(${i})"><img src="./assets/images/trash.png"></div></td>
         </tr>`;
    }
    document.getElementById('mavrick-table-body').innerHTML = tableData;
    document.getElementById('total-team-members').innerHTML = teamList.length;
}

function deleteRow(rowId) {
    teamList.splice(rowId, 1);
    storeItinLocalOrSessionStorage(storageType, keyNameOftableDataInStorage, JSON.stringify(teamList));
    populateTheTable();
}


/* 2) Array Functions 
  filter()
  findIndex()
  forEach()
  indexOf()
  
  pop(), shift()
  push(), unshift()
  
  splice() */