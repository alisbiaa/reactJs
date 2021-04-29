import * as React from 'react';


const Like = (props) => {
    const {like,onLike} = props;
    return (
        <i
            onClick={onLike}
            className={like ? 'fa fa-heart' : 'fa fa-heart-o'}
            aria-hidden="true">
        </i>
    );
};

export default Like;