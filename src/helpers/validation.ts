//helper
const arrToRegexp = (arr:Array<string>):string => (arr.join("|"));

// custom form validation rules
export const customRules = {
    password: (names:Array<string>) => (value: string):boolean => {
        const namesRegexp = new RegExp(`^(?!(?=.*(${arrToRegexp(names)}))).+$`, "i");
        return (/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(value) && namesRegexp.test(value));
    },
    email: (value:string):boolean =>
        (/^[\w,.!#$%&'*+/=?^_`{|}~-]+@([\w-]+\.)+\w\w+$/.test(value)),
};
