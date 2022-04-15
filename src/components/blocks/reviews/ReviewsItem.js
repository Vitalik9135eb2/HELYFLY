import s from './_reviews.module.scss';



function ReviewsItem(props) {
    return (
        <div className={s.reviewsWrap} id={props.id}>

            <div className={s.personWrap}>

                <img className={s.photo} src={props.userAvatar} />

                <div className={s.spanWrap}>
                    <span className={s.name}>{props.userName}</span>
                    <span className={s.profession}>{props.userJob}</span>
                    <span className={s.stars}></span>
                </div>

            </div>

            <div className={s.textWrap}>

                <span className={s.textSpan}>{props.userSubtitle}</span>

                <p className={s.text}>{props.userPost}</p>

                <span className={s.date}>{props.datePost}</span>

            </div>

        </div>
    );
}


export default ReviewsItem;