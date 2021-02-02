function storeItinLocalOrSessionStorage(whereWeNeedToStore, key_name, data) {
    if(whereWeNeedToStore == "session") {
        sessionStorage.setItem(key_name, data);
    }
    if(whereWeNeedToStore == "local") {
        localStorage.setItem(key_name, data);
    }
}

function getDataFromStorage(fromWhereToGet, key_name) {
    if(fromWhereToGet == "session") {
        return sessionStorage.getItem(key_name);
    }
    if(fromWhereToGet == "local") {
        return localStorage.getItem(key_name);
    }
}