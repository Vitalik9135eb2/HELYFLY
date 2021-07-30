import s from './_map.module.scss';


function Map() {
    return (
        <div className={s.schedule}>
            {/* <div className={s.container}> */}
                <div className={s.inner}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4700.661082419775!2d27
                        .54440786563448!3d53.90810198424504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
                        !3m3!1m2!1s0x46dbcf92ca6d8b25%3A0x7dcba0cf4c47dce8!2z0KTQuNGA0LzQtdC90L3Ri9C5INC
                        80LDQs9Cw0LfQuNC9IOKEljE2ICLQkdC10LvQvtGA0YPRgdGB0LrQuNC1INC-0LHQvtC4Ig!5e0!3m2!1
                        sru!2sby!4v1626963516038!5m2!1sru!2sby"
                        className={s.map} 
                        width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy">

                        </iframe>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Map;