import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import MyButton from "../button/MyButton";

const Pagination = ({totalPage,page,changePage}) => {

    let pagesArray = getPagesArray(totalPage);

    return (
        <div>
            {pagesArray.map(p =>
            <MyButton key={p} 
                    style={{margin:10}} 
                    onClick={() => changePage(p)}>
            {p}
            </MyButton>
      )}
        </div>
    );
}

export default Pagination;
