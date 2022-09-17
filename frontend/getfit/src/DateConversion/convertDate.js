const convertDate = (date) => {

    const newDate = new Date(date)

    const months = {
        0 : 'Jan',
        1 : 'Feb',
        2 : 'Mar',
        3 : 'Apr',
        4 : 'May',
        5 : 'June',
        6 : 'July',
        7 : 'Aug',
        8 : 'Sep',
        9 : 'Oct',
        10 : 'Nov',
        11 : 'Dec',
    }

    let month = newDate.getMonth()
    let day = newDate.getDate()
    let year = newDate.getFullYear()

    let monthFull = months[month]

    return (`${monthFull} ${day}, ${year}`)
}

export default convertDate