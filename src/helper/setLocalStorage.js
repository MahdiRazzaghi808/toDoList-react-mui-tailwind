function setLocalStorage(data, name) {
   
    localStorage.setItem(name, JSON.stringify(data));

}

export { setLocalStorage }