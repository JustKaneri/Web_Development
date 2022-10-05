export const getPageCount = (totalPages,limit) =>{
    return Math.ceil(totalPages/limit);
}

export const getPagesArray = (totalPage) => {
    let pagesArray = [];
    for(let i = 0; i< totalPage; i++){
        pagesArray.push(i+1);
    }

    return pagesArray;
}