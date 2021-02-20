<script>
    import type { IMeetup } from './modals';
    import { EInputType, EButtonType } from './enums/meetup';

    import { ServiceGenerate } from './helper';

    import Header from './UI/Header.svelte';
    import TextInput from './UI/TextInput.svelte';
    import Button from './UI/Button.svelte';

    import MeetupGrid from './Meetups/MeetupGrid.svelte';

    let meetups: IMeetup.IMeetupItem[] = [
        {
            id: ServiceGenerate.randomId(),
            title: 'svelte_title',
            subTitle: 'svelte_subTitle',
            description: 'svelte_description',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg',
            address: 'svelte_address',
            contactEmail: 'svelte@svelte.svelte',
            isFavorite: false,
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
    ];

    let meetup: IMeetup.IMeetupItem = {
        id: '',
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        address: '',
        contactEmail: '',
        isFavorite: false,
    };
    let meetupEmpty: IMeetup.IMeetupItem = JSON.parse(JSON.stringify(meetup));

    const titleInput: IMeetup.ITextInput = { id: 'title', label: 'Title', value: meetup.title };
    const subTitleInput: IMeetup.ITextInput = { id: 'subTitle', label: 'Sub Title', value: meetup.subTitle };
    const addressInput: IMeetup.ITextInput = { id: 'address', label: 'Address', value: meetup.address };
    const imageUrlInput: IMeetup.ITextInput = { id: 'imageUrl', label: 'Image Url', value: meetup.imageUrl };
    const contactEmailInput: IMeetup.ITextInput = { id: 'contactEmail', label: 'Contact Email', type: EInputType.email, value: meetup.contactEmail };
    const descriptionInput: IMeetup.ITextInput = {
        id: 'description',
        label: 'Description',
        type: EInputType.textarea,
        rows: 3,
        value: meetup.description,
    };

    let buttonSave: IMeetup.IButton = {
        label: 'Save',
        type: EButtonType.submit,
    };

    function saveData(params): void {
        const newMeetup: IMeetup.IMeetupItem = JSON.parse(JSON.stringify(meetup));
        newMeetup.id = ServiceGenerate.randomId();

        // attention not work
        // meetups.push(newMeetup);

        meetups = [newMeetup, ...meetups];
        meetup = JSON.parse(JSON.stringify(meetupEmpty));
    }

    function handleTitle(e): void {
        meetup.title = e.target.value;
    }

    function handleSubTitle(e: any): void {
        meetup.subTitle = e.target.value;
    }

    function handleAddress(e: any): void {
        meetup.address = e.target.value;
    }

    function handleImageUrl(e: any): void {
        meetup.imageUrl = e.target.value;
    }

    function handleContactEmail(e: any): void {
        meetup.contactEmail = e.target.value;
    }

    function handleDescription(e: any): void {
        meetup.description = e.target.value;
    }

    function toggleFavorite(e) {
        const id: string = e.detail;
        const updatedMeetup: IMeetup.IMeetupItem = { ...meetups.find((x) => x.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex: number = meetups.findIndex((x) => x.id === id);
        const updatedMeetups: IMeetup.IMeetupItem[] = [...meetups];
        updatedMeetups[meetupIndex] = updatedMeetup;
        meetups = updatedMeetups;
    }
</script>

<Header />

<main>
    <form on:submit|preventDefault={saveData}>
        <TextInput textInput={titleInput} on:input={handleTitle} />
        <TextInput textInput={subTitleInput} on:input={handleSubTitle} />
        <TextInput textInput={addressInput} on:input={handleAddress} />
        <TextInput textInput={imageUrlInput} on:input={handleImageUrl} />
        <TextInput textInput={contactEmailInput} on:input={handleContactEmail} />
        <TextInput textInput={descriptionInput} on:input={handleDescription} />

        <div class="button">
            <Button button={buttonSave} />
        </div>
    </form>

    <MeetupGrid {meetups} on:toggle-favorite={toggleFavorite} />
</main>

<style>
    main {
        margin-top: 6rem;
    }

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;

        .button {
            margin-bottom: 0.5rem;
            margin-top: 1rem;
        }
    }
</style>
