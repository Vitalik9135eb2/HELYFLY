import s from './_about.module.scss';
import maria from './../../../assets/img/about/mari.png'


function About() {
    return (
        <div className={s.about}>
            <div className={s.container}>
                <div className={s.inner}>

                    <div className={s.photographer}>

                        <img className={s.photo} src={maria}/>

                        <span className={s.name}>Марина Иванова</span>

                        <span className={s.profession}>Фотограф</span>

                        <span className={s.info}>Показать больше информации о фотографе</span>

                    </div>

                    <div className={s.infoWrap}>

                        <h6 className={s.titleAboutUs}>Об организаторе:</h6>

                        <p className={s.aboutUs}>
                            Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов 
                            туристической отрасли, которые хорошо разбираются в маркетинге, операциях 
                            и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах.
                            <br/>
                            <br/>
                            Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, 
                            которое соответствует бюджету и планам клиента. Мы никогда не зависим от субпоставщиков и не свяжемся…
                        </p>

                        <span className={s.moreAbout}>Читать еще</span>

                        <h6 className={s.titleServices}>Что я предоставлю:</h6>

                        <p className={s.services}>
                            Встречу вас на машине после длительного перелёта.Качественный подбор места и локации для вашей съемки.
                            При необходимости всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе 
                            с обработкой и замечательные впечатления о Дубае!
                        </p>

                        <span className={s.moreServices}>Читать еще</span>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default About;