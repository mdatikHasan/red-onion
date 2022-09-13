import React from 'react';

const PreLoader = (props) => {
    return (
        <div className="text-center col-12 py-5 my-5" style={{display: props.visibility}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif' alt=""/>
    </div>
    );
};

export default PreLoader;