import React from 'react';
import s from './_reviews.module.scss';
import ReviewsItem from './ReviewsItem';


function Reviews(props) {
    
    let reviewsItemPost = props.state.reviewsData.map( item => {

        return (

            <ReviewsItem    id={item.id} 
                            userAvatar={item.userAvatar}
                            userName={item.userName}
                            userJob={item.userJob} 
                            userSubtitle={item.userSubtitle}
                            userPost={item.userPost}
                            datePost={item.datePost}
            />
        )
    })

    let newPostEl = React.createRef();

    let addPost = () => {

        props.addPost();

        // props.dispatch({type: "New Reviews"})

        // props.dispatch(addPostActionCreator())
    }

    let changeTextValue = () => {
        let text = newPostEl.current.value;
        props.changeTextValue(text);

        // props.dispatch({type: "New Text Reviews", upDate: text})

        // props.dispatch(upDateActionCreator(text))

    }

    

    return (
        <div className={s.reviews}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h2 className={s.title}>Отзывы:</h2>

                    {reviewsItemPost}

                    <div className={s.reviewsAddWrap}>
                        <textarea ref={newPostEl} onChange={changeTextValue} value={props.state.taValue} className={s.reviewsNew}></textarea>

                        <button onClick={addPost} className={s.reviewsBtnAdd}>Опубликовать</button>
                    </div>

                    <a className={s.reviewsAll}>Показать Все (134)</a>


                </div>
            </div>
        </div>
    );
}

export default Reviews;