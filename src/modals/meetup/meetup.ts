import type { EInputType, EButtonType } from './../../enums/meetup';

export interface IMeetupItem {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    imageUrl: string;
    address: string;
    contactEmail: string;
}

export interface ITextInput {
    id: string;
    label: string;
    type?: EInputType; // defualt text
    rows?: number;
    value: string;
}

export interface IButton {
    type?: EButtonType; // defualt button
    label: string;
    href?: string;
    mode?: string;
}
