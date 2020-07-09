export const searchString = (content, search) => {

    if(content.includes(search)) {
        return true;
    }

    let emptyArray = [];
    content.split('').find(search[0]);

    search.forEach(letter => {

    })

};