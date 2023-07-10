const getDataLocal = (name) => {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name));
    }

}

export { getDataLocal }