function statusCheck(date, complete) {
    const d = new Date();
    let time = d.getTime();
    const remTime = date - time;

    if (!complete) {
        if (date && remTime < 0) {
            return 'expired'
        } else if (date && remTime <= 3600000) {
            return 'oneH'
        }
    } else {
        return ''
    }

}

export { statusCheck }