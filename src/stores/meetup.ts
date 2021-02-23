import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

import type { IMeetup } from './../modals';

import { ServiceGenerate } from './../helper';

const meetups: Writable<IMeetup.IMeetupItem[]> = writable([
    {
        id: ServiceGenerate.randomId(),
        title: 'svelte_title',
        subTitle: 'svelte_subTitle',
        description: 'svelte_description',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg',
        address: 'svelte_address',
        contactEmail: 'svelte@svelte.svelte',
        isFavorite: true,
    },
    {
        id: ServiceGenerate.randomId(),
        title: 'svelte_title2',
        subTitle: 'svelte_subTitle2',
        description: 'svelte_description2',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_960_720.jpg',
        address: 'svelte_address2',
        contactEmail: 'svelte2@svelte.svelte',
        isFavorite: false,
    },
]);

const meetupsStore = {
    subscribe: meetups.subscribe,
    saveData: (meetupData: IMeetup.IMeetupItem) => {
        const newMeetup: IMeetup.IMeetupItem = { ...meetupData };
        meetups.update((items: IMeetup.IMeetupItem[]) => {
            return [newMeetup, ...items];
        });
    },
    toggleFavorite: (id: string) => {
        meetups.update((items: IMeetup.IMeetupItem[]) => {
            const updatedMeetup: IMeetup.IMeetupItem = { ...items.find((x) => x.id === id) };
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            const meetupIndex: number = items.findIndex((x) => x.id === id);
            const updatedMeetups: IMeetup.IMeetupItem[] = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    },
};

export default meetupsStore;
