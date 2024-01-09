const URL = 'https://etnasoft.com/api/v1/get/';

export function getBooks() {
    try {
        return fetch(URL + '?num_items=25').then(response => {
            let data = response.json();
            return data;

        })
    } catch (error) {
        console.log(error)
    }
}