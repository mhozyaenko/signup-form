// custom form validation rules
export const customRules = {
    password: (names:Array<string>) => (value: string):boolean =>
        (!names.includes(value) && /^(?=.*[A-Za-z]).{8,}$/.test(value)),
    email: (value:string):boolean =>
        (/^[\w,.!#$%&'*+\/=?^_`{|}~-]+@([\w-]+\.)+\w\w+$/.test(value)),
};
