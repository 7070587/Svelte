import type { EInputType, EButtonType } from './../../enums/meetup';

export interface IMeetupItem {
    id?: string;
    title: string;
    subTitle: string;
    description: string;
    imageUrl: string;
    address: string;
    contactEmail: string;

    isFavorite?: boolean;
}

export interface ITextInput {
    id: string;
    label: string;
    type?: EInputType; // defualt text
    rows?: number;
    value: string;

    valid: boolean;
    validMessage: string;
}

export interface IButton {
    type?: EButtonType; // defualt button
    href?: string;
    mode?: string;
    color?: string;
}

export interface IFlyParams {
    delay?: number;
    duration?: number;
    easing?: (t: number) => number;
    x?: number;
    y?: number;
    opacity?: number;
}
