import React from 'react';

const Content = (props) => {
    return ( 
        <div className="content col-md-9 col-sm-12">
            { props.children }
        </div>
     );
}
 
export default Content;