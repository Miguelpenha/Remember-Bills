function formatDay(day: string) {
    if (day.length === 1) {
        return `0${day}`
    } else {
        return day
    }
}

export default formatDay