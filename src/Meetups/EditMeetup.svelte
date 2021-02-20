<script>
    import { createEventDispatcher } from 'svelte';

    import type { IMeetup } from './../modals';
    import { EInputType, EButtonType } from './../enums/meetup';

    import TextInput from './../UI/TextInput.svelte';
    import Button from './../UI/Button.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

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

    function saveData(): void {
        dispatch('save-data', meetup);
    }
</script>

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

<style>
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
