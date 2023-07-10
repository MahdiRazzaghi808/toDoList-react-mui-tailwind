function sortBy(arrayData, sortName) {
    localStorage.setItem('select', sortName);
    const reverseArray = arrayData.reverse();

    const d = new Date();
    let time = d.getTime();

    switch (sortName) {
        case 'all':
            return reverseArray
        case 'noTime':
            return reverseArray.filter(item => item.dateEnd === '' && item.isComplete !== true);
        case 'complete':
            return reverseArray.filter(item => item.isComplete === true);
        case 'oneH':
            return reverseArray.filter(item => item.dateEnd && item.dateEnd - time <= 3600000 && item.dateEnd - time > 0);
        case 'expired':
            return reverseArray.filter(item => item.dateEnd && (item.dateEnd - time) < 0 && item.isComplete !== true);
        case 'timeToUp':
            return reverseArray.filter(item => item.dateEnd && (item.dateEnd - time) > 0 && item.isComplete !== true).sort((a, b) => b.dateEnd - a.dateEnd)
        case 'timeToDown':
            return reverseArray.filter(item => item.dateEnd && (item.dateEnd - time) > 0 && item.isComplete !== true).sort((a, b) => a.dateEnd - b.dateEnd);
        default:
            return reverseArray
    }




}
export { sortBy }