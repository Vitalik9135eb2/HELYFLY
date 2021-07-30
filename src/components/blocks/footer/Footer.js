import s from './_footer.module.scss';
import Logo from './../../../assets/img/header/logo.svg';
import vk from './../../../assets/img/footer/vk.svg';
import fb from './../../../assets/img/footer/Facebook.svg';
import inst from './../../../assets/img/footer/Instragram.svg';
import visa from './../../../assets/img/footer/VISA.png';
import mc from './../../../assets/img/footer/MC.png';




function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.inner}>

                    <div className={s.footerTop}>

                        <div className={s.logoWrap}>
                            <a href="#" className={s.logo}>
                                <img className={s.logoImg} src={Logo}/>
                            </a>
                        </div>

                        <div className={s.socialWrap}>

                            <a className={s.social}>
                                <img className={s.socialImg} src={vk}/>
                            </a>

                            
                            <a className={s.social}>
                                <img className={s.socialImg} src={fb}/>
                            </a>

                            
                            <a className={s.social}>
                                <img className={s.socialImg} src={inst}/>
                            </a>

                        </div>

                    </div>

                    <div className={s.footerBottom}>

                        <div className={s.cardWrap}>
                            <a href="#" className={s.link}>
                                <img className={s.mc} src={mc}/>
                            </a>

                            <a href="#" className={s.link}>
                                <img className={s.visa} src={visa}/>
                            </a>
                        </div>

                        <div className={s.textWrap}>
                            <a href="tel: +88007000000" className={s.tel}>Тех. поддержка: 8(800)700-00-00</a>

                            <span className={s.spanEnd}>© 2018 HELYFLY. All Rights Reserved.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default  Footer;