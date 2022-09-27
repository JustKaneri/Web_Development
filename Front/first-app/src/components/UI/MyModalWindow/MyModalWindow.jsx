import React from 'react';
import mymodelStyle from './MyModal.module.css'

const MyModalWindow = ({children,visible,setVisible}) => {

    const rootClasses = [mymodelStyle.myModal];

    if(visible){
        rootClasses.push(mymodelStyle.myModalActive);
    }

    return (
        <div className= {rootClasses.join(' ')} onClick={() =>setVisible(false)}>
            <div className= {mymodelStyle.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModalWindow;