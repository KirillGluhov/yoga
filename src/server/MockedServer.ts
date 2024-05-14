import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import smallPhoto from "../photo/671c0ccd80ac40538765e3fa14da652b.jpg";

import firstCarouselPhoto from "../photo/2f2bd3042df120fbc09779478a5b153e.jpg";
import secondCarouselPhoto from "../photo/6dc0efdf04c56983a9f12a562b82de31.jpg";
import thirdCarouselPhoto from "../photo/be0cc73ded8805141974fda6f385c17a.jpg";

export async function fetchHomeSmallPhoto() {
    const mock = new MockAdapter(axios);

    mock.onGet('/api/home/smallPhoto').reply(200, {
        url: smallPhoto
    });

    try {
        const response = await axios.get('/api/home/smallPhoto');
        return response.data.url;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export async function fetchHomeAllPhoto() {
    const mock = new MockAdapter(axios);

    mock.onGet('/api/home/allPhoto').reply(200, {
        urls: [firstCarouselPhoto, secondCarouselPhoto, thirdCarouselPhoto]
    });

    try {
        const response = await axios.get('/api/home/allPhoto');
        return response.data.urls;
    } catch (error) {
        console.log(error);
        return [];
    }
}
