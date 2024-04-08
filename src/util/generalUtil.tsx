export const classNames: (...classes: string[]) => string = (
    ...classes: string[]
) => {
    return classes.filter(Boolean).join(' ');
};
