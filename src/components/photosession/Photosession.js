import s from './_photosession.module.scss';
import React from 'react';



function Photosession() {
    return (
        <div className={s.photosession}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h2 className={s.title}>Фотосессия в вертолете</h2>

                    <div className={s.videoWrap}></div>

                    <div className={s.textWrap}>

                        <p className={s.text}>
                            Полет на вертолете это прекрасная возможность получить новые ощущения!
                            А наш замечательный фотограф запечатлит лучшие моменты.
                        </p>

                        <span className={s.time}>3 часа съемки</span>
                        <span className={s.photo}>Более 50 фотографий</span>
                        <span className={s.location}>Москва</span>
                        <span className={s.question}>Готовы ответить на любые вопросы</span>

                    </div>

                    <div className={s.testimonialsWrap}>

                        <span className={s.testimonialsSpan}>Более <strong>50</strong> отзывов с оценкой</span>

                        <div className={s.starWrap}>

                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default  Photosession;