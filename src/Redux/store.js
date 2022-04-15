
import One from './../assets/img/reviews/1.png';
import Two from './../assets/img/reviews/2.png';
import Three from './../assets/img/reviews/3.png';
import reviewsReduser from './reviewsReduser';



let store = {

    _callSubscriber () {

    },

    _state:{
        reviewsData:[
            {
                id: 1, userAvatar:One , userName: 'Валерия Антонова',
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
    },

    getState() {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action){

        this._state = reviewsReduser(this._state, action)

        this._callSubscriber(this._state)   


        // if (action.type === newReviewsPost){
        //     let newReviews = {
        //         id: this._state.reviewsData.length + 1,
        //         userAvatar: One,
        //         userName: "Аноним",
        //         userSubtitle: 'Супер! Я бы заказала съемку снова!',
        //         userPost: this._state.taValue,
        //         datePost: '30 Февраля, 1984г'
        //     }
        
        //     this._state.reviewsData.push(newReviews);
        //     this._state.taValue = " ";
        //     this._callSubscriber(this._state)
        // }
        // else if (action.type === newReviewsText){
        //     this._state.taValue = action.newText;
        //     this._callSubscriber(this._state)   
        // }
    },

    // addNewReviews () {

    //     let newReviews = {
    //         id: this._state.reviewsData.length + 1,
    //         userAvatar: One,
    //         userName: "Аноним",
    //         userSubtitle: 'Супер! Я бы заказала съемку снова!',
    //         userPost: this._state.taValue,
    //         datePost: '30 Февраля, 1984г'
    //     }
    
    //     this._state.reviewsData.push(newReviews);
    //     this._state.taValue = " ";
    //     this._callSubscriber(this._state)
    
    // },
    
    // updateText (upDate) {
    //     this._state.taValue = upDate;
    //     this._callSubscriber(this._state)
    // }
}







export default store