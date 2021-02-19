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
    type: EInputType;
    rows?: number;
    value: string;
}

export interface IButton {
    type: EButtonType;
    label: string;
    href?: string;
    mode?: string;
}
