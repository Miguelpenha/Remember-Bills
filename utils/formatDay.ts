function formatDay(day: number) {
    if (String(day).length === 1) {
        return `0${day}`
    } else {
        return day
    }
}

export default formatDay