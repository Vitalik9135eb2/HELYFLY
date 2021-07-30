import s from './_reviews.module.scss';
import One from './../../../assets/img/reviews/1.png';
import Two from './../../../assets/img/reviews/2.png';
import Three from './../../../assets/img/reviews/3.png';


function Reviews() {
    return (
        <div className={s.reviews}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h2 className={s.title}>Отзывы:</h2>
                    
                    <div className={s.reviewsWrap}>

                        <div className={s.personWrap}>

                            <img className={s.photo} src={One}/>

                            <div className={s.spanWrap}>
                                <span className={s.name}>Валерия Антонова</span>
                                <span className={s.profession}>Арт-директор</span>
                                <span className={s.stars}></span>
                            </div>

                        </div>

                        <div className={s.textWrap}>

                            <span className={s.textSpan}>Супер! Я бы заказала съемку снова!</span>

                            <p className={s.text}>
                                Хотим выразить огромную благодарность вашей компании! 
                                Получили море ощущений, все прошло просто замечательно. 
                                Фотки получились великолепные, отдельное спасибо фотографу!
                            </p>

                            <span className={s.date}>27 Апреля, 2019г.</span>

                        </div>

                    </div>
                    
                    <div className={s.reviewsWrap}>

                        <div className={s.personWrap}>

                            <img className={s.photo} src={Two}/>

                            <div className={s.spanWrap}>
                                <span className={s.name}>Виталий Петров</span>
                                <span className={s.profession}>Фотограф</span>
                                <span className={s.stars}></span>
                            </div>

                        </div>

                        <div className={s.textWrap}>

                            <span className={s.textSpan}>Супер! Я бы заказала съемку снова!</span>

                            <p className={s.text}>
                                Восторг! :) Очень понравилось :) Захватили последний теплый, 
                                солнечный октябрьский день :)
                                Впечатлило всё: сам вертолет, взлет, полёт, приземление. 
                                Организация полёта отличная. Спасибо!
                            </p>

                            <span className={s.date}>19 Апреля, 2019г.</span>

                        </div>

                    </div>


                    <div className={s.reviewsWrap}>

                        <div className={s.personWrap}>

                            <img className={s.photo} src={Three}/>
                            
                            <div className={s.spanWrap}>
                                
                                <span className={s.name}>Джим Керри</span>
                                <span className={s.stars}></span>
                               
                            </div>

                        </div>

                        <div className={s.textWrap}>

                            <span className={s.textSpan}>Супер! Я бы заказала съемку снова!</span>

                            <p className={s.text}>
                                Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! 
                                Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. 
                                Сами много фоткались,поэтому воспоминания обалденные!!!)) 
                                А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) 
                                Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!
                            </p>

                            <span className={s.date}>11 Апреля, 2019г.</span>

                        </div>

                    </div>

               
                    <a className={s.reviewsAll}>Показать Все (134)</a>


                </div>
            </div>
        </div>
    );
}

export default  Reviews;