import { writable, readable } from 'svelte/store';

interface IModalData {
    status: boolean;
    title: string;
    component: any;
    params: object;
    firstFocusElement: any;
}

let modalData: IModalData = {
    status: false,
    title: null,
    component: null,
    params: {},
    firstFocusElement: HTMLElement,
};

export const modal = writable(JSON.parse(JSON.stringify(modalData)));

export function setOpen(title?: string, component?: any, params?: any) {
    modal.set({
        status: true,
        title,
        component,
        params,
        firstFocusElement: document.activeElement,
    });
}

export function setClose() {
    modal.set(JSON.parse(JSON.stringify(modalData)));
}
