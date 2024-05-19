import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import smallPhoto from "../photo/671c0ccd80ac40538765e3fa14da652b.jpg";

import firstCarouselPhoto from "../photo/2f2bd3042df120fbc09779478a5b153e.jpg";
import secondCarouselPhoto from "../photo/6dc0efdf04c56983a9f12a562b82de31.jpg";
import thirdCarouselPhoto from "../photo/be0cc73ded8805141974fda6f385c17a.jpg";

import firstDescriptionPhoto from "../photo/72997f523fc9b1328f680a7b7d3fdfab.jpg";
import secondDescriptionPhoto from "../photo/27573a4786364c904b4e6aeed573e34e.jpg";
import thirdDescriptionPhoto from "../photo/eb159ef9efbb78410c6325b2e555afdb.jpg";
import forthDescriptionPhoto from "../photo/79a319afbc6d68faa2cb9c40c1b60257.jpg";
import fifthDescriptionPhoto from "../photo/a0921c5a5a7dc21239a18b555fbdf378.jpg";
import sixthDescriptionPhoto from "../photo/357183c7865c875e2955026ef1a74d57.jpg";

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

export interface Direction
{
    name: string,
    days: Array<number>,
    duration: number,
    description: Array<string>,
    url: string
}

export async function fetchDirections() : Promise<Array<Direction>> {
    const mock = new MockAdapter(axios);

    mock.onGet('/api/description').reply(200, {
        directions: [
            {
                name: "Кундалини-йога",
                days: [1,3,5],
                duration: 60,
                description: [
                    "Сочетает довольно интенсивные упражнения, специальную дыхательную практику, повторяющиеся асаны.",
                    "Помогает увеличить уровень энергии и силы, снять напряжение и стресс, улучшить физическую выносливость, концентрацию, стимулировать творческий потенциал и привнести глубокий внутренний покой.",
                    "Кундалини-йога доступна людям любого возраста и физической подготовки."
                ],
                url: firstDescriptionPhoto
            },
            {
                name: "Хатха-йога",
                days: [2,4,6],
                duration: 70,
                description: [
                    "Это классическое направление йоги, которое включает в себя асаны для укрепления мышц, дыхательные упражнения и медитацию.",
                    "Регулярные занятия помогают подтянуть тело, улучши гибкость, укрепить здоровье, придав телу силу и выносливость, а также обрести душевное равновесие."
                ],
                url: secondDescriptionPhoto
            },
            {
                name: "Пилатес",
                days: [0,1,2],
                duration: 50,
                description: [
                    "Основан на принципе баланса и координации, нацелен на укрепление мышц, улучшение гибкости, состоит из плавных и бережных движений.",
                    "Пилатес работает не только с крупными, но и с мелкими мышцами, которые часто остаются незадействованными при стандартных  упражнениях.",
                    "Подходит для людей всех возрастов и уровней физической подготовки, включая беременных женщин и пожилых людей."
                ],
                url: thirdDescriptionPhoto
            },
            {
                name: "Здоровая спина",
                days: [1,2,3],
                duration: 60,
                description: [
                    "Занятия ориентированы на гармоничное развитие тела. Регулярное выполнение упражнений формирует мышечный корсет, удерживающий позвоночник.",
                    "Способствует улучшению осанки, координации движений, снижению веса благодаря нормализации лимфотока. Снимается психоэмоциональное напряжение."
                ],
                url: forthDescriptionPhoto
            },
            {
                name: "Флоу йога",
                days: [2,4,5],
                duration: 70,
                description: [
                    "Сочетает в себе элементы различных стилей йоги, позволяет быстро достичь гармонии тела и духа.",
                    "Занятия йогой построены на принципах напряжения, расслабления и дыхания.  Дыхательные практики способствуют улучшению кровообращения и нормализации давления."
                ],
                url: fifthDescriptionPhoto
            },
            {
                name: "Стретчинг",
                days: [1,3,4],
                duration: 80,
                description: [
                    "Стрейч, растяжка  поможет снять напряжение, приобрести легкость и свободу тела. Состоит из плавных движений, которые рассчитаны на удлинение и растяжку мышц.",
                    "Стретчинг помогает улучшить гибкость тела, укрепить мышцы, улучшить подвижность суставов и снизить риск получения травм."
                ],
                url: sixthDescriptionPhoto
            }
        ]
    });

    try {
        const response = await axios.get('/api/description');
        return response.data.directions;
    } catch (error) {
        console.log(error);
        return [];
    }
}
