export const classNames: (...classes: string[]) => string = (...classes: string[]) =>  {
    return classes.filter(Boolean).join(' ')
}

export const getNiceDate: () => string = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear();

    const paddedDay = day < 10 ? `0${day}` : day;
    const paddedMonth = month < 10 ? `0${month}` : month;

    return `${paddedDay}/${paddedMonth}/${year}`
}