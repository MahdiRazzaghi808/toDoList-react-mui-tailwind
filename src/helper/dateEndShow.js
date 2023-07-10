function dateEndShow(isComplete, date) {
    const d = new Date();
    let time = d.getTime();

    const remTime = date - time;
    const hour = Math.round((remTime % 86400000) / 3600000);
    const day = Math.floor(remTime / 86400000);

    if (isComplete) {
        return 'تکمیل شده :)'
    } else if (date === '') {
        return '∞'
    } else if (remTime < 0) {
        return 'منقضی شده :('
    } else if (remTime <= 3600000) {
        return 'کمتر از یک ساعت'
    } else if (remTime <= 86400000) {
        return `${hour} ساعت`
    } else {
        if (hour === 24) {
            return `${day + 1} روز`
        } else if (hour === 0) {
            return `${day} روز`
        } else {
            return `${day} روز و ${hour} ساعت `
        }
    }

}

export { dateEndShow }