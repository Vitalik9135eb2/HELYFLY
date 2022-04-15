import React from 'react';

import { addPostActionCreator, upDateActionCreator } from '../../../Redux/reviewsReduser';
import Reviews from './Reviews';


function ReviewsContainer(props) {

    let state = props.store.getState()

    let addPost = () => {

        // props.addNewReviews();

        // props.dispatch({type: "New Reviews"})

        props.store.dispatch(addPostActionCreator())
    }

    let changeTextValue = (text) => {
        props.store.dispatch(upDateActionCreator(text))
    }



    return (

        <Reviews upText={changeTextValue} addPost={addPost} state={state.reviews} />
    );
}

export default ReviewsContainer;