<script>
    import { createEventDispatcher } from 'svelte';
    import meetups from './../stores/meetup';

    import type { IMeetup } from './../modals';
    import { EInputType } from './../enums/meetup';
    import { ServiceValidation, ServiceGenerate } from './../helper';

    import TextInput from './../UI/TextInput.svelte';
    import Button from './../UI/Button.svelte';
    import Modals from './../UI/Modals.svelte';

    const dispatch: (name: string, detail?: any) => void = createEventDispatcher();

    let meetup: IMeetup.IMeetupItem = {
        id: ServiceGenerate.randomId(),
        title: '',
        subTitle: '',
        description: '',
        imageUrl: '',
        address: '',
        contactEmail: '',
        isFavorite: true,
    };
    const titleInput: IMeetup.ITextInput = {
        id: 'title',
        label: 'Title',
        value: meetup.title,
        valid: false,
        validMessage: 'Please enter a valid title',
    };
    const subTitleInput: IMeetup.ITextInput = {
        id: 'subTitle',
        label: 'Sub Title',
        value: meetup.subTitle,
        valid: false,
        validMessage: 'Please enter a valid sub title',
    };
    const addressInput: IMeetup.ITextInput = {
        id: 'address',
        label: 'Address',
        value: meetup.address,
        valid: false,
        validMessage: 'Please enter a valid address',
    };
    const imageUrlInput: IMeetup.ITextInput = {
        id: 'imageUrl',
        label: 'Image Url',
        value: meetup.imageUrl,
        valid: false,
        validMessage: 'Please enter a valid image url',
    };
    const contactEmailInput: IMeetup.ITextInput = {
        id: 'contactEmail',
        label: 'Contact Email',
        type: EInputType.email,
        value: meetup.contactEmail,
        valid: false,
        validMessage: 'Please enter a valid contact email',
    };
    const descriptionInput: IMeetup.ITextInput = {
        id: 'description',
        label: 'Description',
        type: EInputType.textarea,
        rows: 3,
        value: meetup.description,
        valid: false,
        validMessage: 'Please enter a valid description',
    };

    let buttonCancel: IMeetup.IButton = {
        mode: 'outline',
    };

    let modalTitle: string = 'Edit New Meetup';

    let isFormValid: boolean = false;

    // watch value, if value change update UI
    $: titleInput.valid = !ServiceValidation.isEmpty(meetup.title);
    $: subTitleInput.valid = !ServiceValidation.isEmpty(meetup.subTitle);
    $: addressInput.valid = !ServiceValidation.isEmpty(meetup.address);
    $: imageUrlInput.valid = ServiceValidation.isImage(meetup.imageUrl);
    $: contactEmailInput.valid = ServiceValidation.isEmail(meetup.contactEmail);
    $: descriptionInput.valid = !ServiceValidation.isEmpty(meetup.description);
    $: isFormValid =
        titleInput.valid && subTitleInput.valid && addressInput.valid && imageUrlInput.valid && contactEmailInput.valid && descriptionInput.valid;

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

    function disabledSave(): boolean {
        return (
            !titleInput.valid ||
            !subTitleInput.valid ||
            !addressInput.valid ||
            !imageUrlInput.valid ||
            !contactEmailInput.valid ||
            !descriptionInput.valid
        );
    }

    function saveData(): void {
        const meetupData: IMeetup.IMeetupItem = JSON.parse(JSON.stringify(meetup));

        // attention not work
        // meetups.push(newMeetup);

        meetups.saveData(meetupData);
        dispatch('save-data', meetup);
    }

    function closeModal(): void {
        dispatch('close-modal');
    }
</script>

<Modals {modalTitle} on:close-modal>
    <form on:submit|preventDefault={saveData}>
        <TextInput textInput={titleInput} on:input={handleTitle} />
        <TextInput textInput={subTitleInput} on:input={handleSubTitle} />
        <TextInput textInput={addressInput} on:input={handleAddress} />
        <TextInput textInput={imageUrlInput} on:input={handleImageUrl} />
        <TextInput textInput={contactEmailInput} on:input={handleContactEmail} />
        <TextInput textInput={descriptionInput} on:input={handleDescription} />
    </form>

    <div class="button" slot="footer">
        <Button on:click={saveData} disabled={!isFormValid}>Save</Button>
        <Button button={buttonCancel} on:click={closeModal}>Cancel</Button>
    </div>
</Modals>

<style>
    form {
        width: 100%;
    }
</style>
