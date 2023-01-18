import dayjs from "dayjs"

export function generateDates() {
    const firstDayofTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDates = firstDayofTheYear

    while (compareDates.isBefore(today)) {
        dates.push(compareDates.toDate())
        compareDates = compareDates.add(1, 'day')
    }
    return dates
}