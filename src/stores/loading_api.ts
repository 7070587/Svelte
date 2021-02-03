import { writable, readable } from 'svelte/store';
import fetchAPI from '@/LoadingAPI/loading_api';

export namespace LoadingApi {}

export const selected = writable('React');

export function setSelected(topic: string = 'React') {
    selected.set(topic);
}

export const repos = readable(
    {
        status: 'idle', // idle| loading | loaded | error,
        items: [],
        error: null,
    },
    (set) => setRepos(set),
);

export function setRepos(set) {
    // 使用 AbortController： 如果本次求還沒有回傳值，又有新的請求，取消本次請求
    let currentController: AbortController;
    let unsubscribe = selected.subscribe((val) => {
        if (currentController) {
            currentController.abort();
        }

        set({
            status: 'loading', // idle| loading | loaded | error,
            items: [],
            error: null,
        });

        const [res, controller] = fetchAPI(val.toLowerCase());
        currentController = controller;

        res.then((data) => {
            currentController = null;
            set({
                status: 'loaded', // idle| loading | loaded | error,
                items: data?.items ?? [],
                error: null,
            });
        }).catch((err) => {
            if (err.name === 'AbortError') {
                set({
                    status: 'loading', // idle| loading | loaded | error,
                    items: [],
                    error: null,
                });
            } else {
                set({
                    status: 'error', // idle| loading | loaded | error,
                    items: [],
                    error: err,
                });
            }
        });
    });

    return () => unsubscribe();
}
