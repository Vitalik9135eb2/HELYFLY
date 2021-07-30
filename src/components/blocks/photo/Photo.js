import s from './_photo.module.scss';
import one from './../../../assets/img/photo/1.png';
import two from './../../../assets/img/photo/2.png';
import three from './../../../assets/img/photo/3.png';
import four from './../../../assets/img/photo/4.png';
import five from './../../../assets/img/photo/1.png';
import six from './../../../assets/img/photo/2.png';
import seven from './../../../assets/img/photo/3.png';
import eight from './../../../assets/img/photo/4.png';

function Photo() {
    return (
        <div className={s.photo}>
            <div className={s.container}>
                <div className={s.inner}>

                    <h2 className={s.title}>Фотографии пакета</h2>

                    <div className={s.wrapImg}>

                        <img className={s.img} src={one}/>
                        <img className={s.img} src={two}/>
                        <img className={s.img} src={three}/>
                        <img className={s.img} src={four}/>
                        <img className={s.img} src={five}/>
                        <img className={s.img} src={six}/>
                        <img className={s.img} src={seven}/>
                        <img className={s.img} src={eight}/>

                    </div>

                    <span className={s.allPhoto}>Показать все фото</span>

                </div>
            </div>
        </div>
    );
}

export default Photo;