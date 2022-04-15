import One from './../assets/img/reviews/1.png';
import Two from './../assets/img/reviews/2.png';
import Three from './../assets/img/reviews/3.png';

const newReviewsPost = "New Reviews";
const newReviewsText = "New Text Reviews";

export let addPostActionCreator = () => {
    return {
        type: newReviewsPost
    }
}


export let upDateActionCreator = (text) => {
    return {
        type: newReviewsText,
        newText: text
    }
}

let initialState = {

    reviewsData: [
        {
            id: 1, userAvatar: One, userName: 'Валерия Антонова',
            userJob: 'Арт-директор', userSubtitle: 'Супер! Я бы заказала съемку снова!',
            userPost: `Хотим выразить огромную благодарность вашей компании! 
                Получили море ощущений, все прошло просто замечательно. 
                Фотки получились великолепные, отдельное спасибо фотографу!`,
            datePost: '27 Апреля, 2019г'
        },

        {
            id: 2, userAvatar: Two, userName: 'Виталий Петров',
            userJob: 'Фотограф', userSubtitle: 'Супер! Я бы заказала съемку снова!',
            userPost: ` Восторг! :) Очень понравилось :) Захватили последний теплый, 
                солнечный октябрьский день :)
                Впечатлило всё: сам вертолет, взлет, полёт, приземление. 
                Организация полёта отличная. Спасибо!`,
            datePost: '11 Апреля, 2019г.'
        },

        {
            id: 3, userAvatar: Three, userName: 'Джим Керри',
            userJob: '', userSubtitle: 'Супер! Я бы заказала съемку снова!',
            userPost: `Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! 
                Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. 
                Сами много фоткались,поэтому воспоминания обалденные!!!)) 
                А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) 
                Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!`,
            datePost: '11 Апреля, 2019г.'
        },
    ],

    taValue: " ",
}


let ReviewsReduser = (state = initialState, action) => {

    switch (action.type) {
        case newReviewsPost:
            let newReviews = {
                id: state.reviewsData.length + 1,
                userAvatar: One,
                userName: "Аноним",
                userSubtitle: 'Супер! Я бы заказала съемку снова!',
                userPost: state.taValue,
                datePost: '30 Февраля, 1984г'
            }

            state.reviewsData.push(newReviews);
            state.taValue = " ";
            return state;

        case newReviewsText:
            state.taValue = action.newText;
            return state;

        default:
            return state;
    }
}

export default ReviewsReduser