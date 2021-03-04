import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const sample: Writable<any> = writable([]);

const sampleStore = {};

export default sampleStore;
