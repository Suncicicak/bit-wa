import React from 'react';
import SinglePost from './SinglePost';
import PropTypes from 'prop-types';

 const BlogList = props => {
    return (
        <div className='js-outer-div'> 
            {props.info.map((item,i) => <SinglePost post={item} key={i} />)}
        </div>
    )
}


BlogList.propTypes = {
    info: PropTypes.array.isRequired
}

export default BlogList;