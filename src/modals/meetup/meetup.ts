import type { EFormType } from './../../enums/meetup';

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
    type: EFormType;
    rows?: number;
    value: string;
}
