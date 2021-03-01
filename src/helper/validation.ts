export namespace ServiceValidation {
    export function isEmpty(value: string | number): boolean {
        return value.toString().trim().length === 0;
    }

    export function isEmail(value: string): boolean {
        const emailRegex: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        return emailRegex.test(value);
    }

    export function isImage(value: string): boolean {
        const imageRegex: RegExp = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
        return imageRegex.test(value);
    }
}
