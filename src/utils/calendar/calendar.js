export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEK_LENGTH = 7;

export const convertFromDate = (d) => {
    const date = new Date(d);
    return {
        time: d,
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
    }
}

export const convertIntoString = (year, month) => {
    return new Date(year, month)
        .toDateString()
        .replace(/(^[a-zA-Z]{3}\s)|([0-9]{2}\s)/g, "")
}

export const getWeek = (d, weekLength = WEEK_LENGTH) => {
    const date = convertFromDate(d);
    const week = Array.from({ length: weekLength });
    const day = 24 * 3600 * 1000;
    const start = d - (day * ((date.day || 7) - 1));

    return week.reduce((a, c, i) => {
        if (!a.length) {
            return [...a, convertFromDate(start)];
        } else {
            return [...a, convertFromDate(start + day * i)];
        }
    }, []);
};

export const getPrevWeek = (d, weekLength = WEEK_LENGTH) => {
    const timeWeek = (24 * 3600 * 1000) * weekLength;
    return getWeek(d - timeWeek);
}

export const getNextWeek = (d, weekLength = WEEK_LENGTH) => {
    const timeWeek = (24 * 3600 * 1000) * weekLength;
    return getWeek(d + timeWeek);
}
