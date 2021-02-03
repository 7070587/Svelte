const api = (topic: string = 'react') => {
    const controller: AbortController = new AbortController();
    const data: any = fetch(`https://api.github.com/search/repositories?q=topic:${topic}`, {
        signal: controller.signal,
    })
        .then((res) => res.json())
        .catch((error) => console.log(' => ', error));
    return [data, controller];
};

function fetchAPI(topic: string = 'react') {
    const controller: AbortController = new AbortController();
    const data: any = fetch(`https://api.github.com/search/repositories?q=topic:${topic}`, {
        signal: controller.signal,
    })
        .then((res) => res.json())
        .catch((error) => console.log(' => ', error));

    // console.log('data => ', data);
    return [data, controller];
}

export default fetchAPI;
