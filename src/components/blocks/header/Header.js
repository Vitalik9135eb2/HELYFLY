import s from './_header.module.scss';
import logo from './../../../assets/img/header/logo.svg'
import user from './../../../assets/img/header/user.png';


function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.wrapper}>
                        <img className={s.logo} src={logo} alt="logo"/>
                        <a className={s.phoneCity} href="tel:88001231212">Москва</a>

                        <div className={s.phone}>
                            <span className={s.span}>Телефон</span>
                            <a className={s.phoneLink} href="tel:88001231212">8(800)-123-12-12</a>
                        </div>
                    </div>

                    <a className={s.user} href="">
                        <img className={s.img} src={user} alt="user"/>
                    </a>
                </div>
                
            </div>          
        </div>
    );
}

export default Header;