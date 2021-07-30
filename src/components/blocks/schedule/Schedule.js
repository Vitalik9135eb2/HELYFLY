import s from './_schedule.module.scss';


function Schedule() {
    return (
        <div className={s.schedule}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h2 className={s.title}>Доступная съемка в ближайщее время</h2>

                    <table className={s.table}>
                        <tr className={s.stringTitle}>
                            <h6 className={s.tableTitle}>Пятница, 14 сентября</h6>
                        </tr>

                        <tr className={s.string}>
                            <div className={s.spanWrap}>
                                <span className={s.time}>15:00 - 18:00</span>
                                <span className={s.amount}>850$</span>
                                <span className={s.remainder}>Осталось — 1 место</span>
                            </div>

                            <button className={s.btn}>Выбрать</button>
                        </tr>

                        <tr className={s.string}>
                            <div className={s.spanWrap}>
                                <span className={s.time}>19:00 - 22:00</span>
                                <span className={s.amount}>850$</span>
                                <span className={s.remainder}>Осталось — 1 место</span>
                            </div>

                            <button className={s.btn}>Выбрать</button>
                        </tr>

                        <tr className={s.stringAbout}>
                            <span className={s.about}>Более 50 отзывов с оценкой</span>
                        </tr>


                    </table>


                </div>
            </div>
        </div>
    );
}

export default Schedule;