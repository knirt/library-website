import { BOOK } from "../types";
//USEFUL FUNCS

//ID-Generator

export const generateUniqueID = function (arrayOfIDs: number[]): number {
    const newID: number = Math.floor(Math.random() * 10000);

    const sortedArray: number[] = arrayOfIDs.sort((a: number, b: number) => {
        if (Math.abs(a - newID) > Math.abs(b - newID)) {
            return 1;
        } else {
            return -1;
        }
    });

    if (sortedArray[0] === newID) generateUniqueID(arrayOfIDs);

    return newID;
};

//this func is for the shopReducer for the tag filter functionality
export const filterShop = function (
    tag: string,
    data: Array<BOOK>
): Array<BOOK> {
    return data.filter((item) => item.tags.some((x) => x === tag));
};

// function to take author and compare with keyword of search (to be used iin function below)
// it will be used for title and author
const checkAuth = function (auth: string, keyword: string): boolean {
    //make cases consistent
    const author = auth.toLowerCase();
    const authArr = author.split(" ");

    //now compare all elements of split array with keyword
    const word = keyword.toLowerCase();
    return authArr.some((item) => item === word);
};

//same as above but this time for title, also returns bool
const checkTitle = function (title: string, keyword: string): boolean {
    const lowTitle = title.toLowerCase();
    const protoTitleArr = lowTitle.split(" ");
    const titleArr = protoTitleArr.filter((item) => {
        //prettier-ignore
        return item !== "the" || "a" || "of" || "as" || "and" || "or" || "is" || "are" || "for";
    });

    const word = keyword.toLowerCase();

    return titleArr.some((item) => item === word);
};

//function to perform search by keyword in shopReducer for filter functionality
export const searchShop = function (
    keyword: string,
    data: Array<BOOK>
): Array<BOOK> {
    const results = data.filter((item) => {
        return (
            checkAuth(item.author, keyword) || checkTitle(item.title, keyword)
        );
    });

    return results;
};
