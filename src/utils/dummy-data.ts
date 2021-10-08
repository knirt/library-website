import { BOOK } from "../types";
import { generateUniqueID } from "./funcs";
import { Tags } from "../types";
import aristotleImg from "../images/aristotle.png";
import worldAsWillImg from "../images/worldaswill.png";
import illiadImg from "../images/iliad.png";
import birthOfTragImg from "../images/birthoftrag.png";
import gravityImg from "../images/gravity.png";
import lewisImg from "../images/lewis.png";
import arendtImg from "../images/arendt.png";
import beyondGoodImg from "../images/beyondGood.png";
import braveNewImg from "../images/braveNewWorld.png";
import leisureBasisImg from "../images/leisureBasisOf.png";
import nicomacheanImg from "../images/nicomachean.png";

//This is my quasi-database, if i make a server-side for this app ill convert all this into a real db
//I declare all my types for the data inside this file because it doesnt need to be used anywhere else
//exept for the individual BOOK type, which I declared in another file types.ts right in src
//i declare all my types here

type BOOK_FACTORY = (
    id: number,
    title: string,
    author: string,
    secondAuth: string,
    publisher: string,
    datePub: number,
    dateWrit: number,
    price: number,
    isTranslated: boolean,
    imageReference: any,
    tags: string[]
) => BOOK;

type BOOKS = Array<BOOK>;

//here is factory func for a Book object, takes in a bunch of data none of which can be left blank, if it is
//not present in a book i set value to empty string or false
//goal here is to set this file up so all i have to do to add a book is add 1 item to array of Books via the
//book factory and maybe import an image and then everything else is automatically taken care of.

//above the factory here i have an array of ID's which were pushed from every new created book just for
//easy fast access to ID's for generating unique newIDs and other purposes.
let bookIDs: number[] = [9999];

const BookFactory: BOOK_FACTORY = function (
    id,
    title,
    author,
    secondAuth,
    publisher,
    datePub,
    dateWrit,
    price,
    isTranslated,
    imageReference,
    tags
) {
    bookIDs.push(id);

    return {
        id,
        title,
        author,
        secondAuth,
        publisher,
        datePub,
        dateWrit,
        price,
        isTranslated,
        imageRef: imageReference,
        inCart: false,
        tags,
    };
};

//this is array of books
const Books: BOOKS = [
    BookFactory(
        1515,
        "Metaphysics",
        "Aristotle",
        "C.D.C Reeve",
        "Hacket",
        2016,
        -350,
        20,
        true,
        aristotleImg,
        [Tags.META]
    ),

    BookFactory(
        2424,
        "The World as Will and Representation",
        "Arthur Schopenhauer",
        "E.F.J. Payne",
        "Dover",
        1969,
        1818,
        20,
        true,
        worldAsWillImg,
        [Tags.META, Tags.EPIS]
    ),

    BookFactory(
        3838,
        "The Birth of Tragedy",
        "Friedrich Nietzsche",
        "Walter Kaufmann",
        "Random House",
        1967,
        1872,
        15,
        true,
        birthOfTragImg,
        [Tags.ETHICS, Tags.PSYCH]
    ),

    BookFactory(
        7171,
        "The Iliad",
        "Homer",
        "Richmond Lattimore",
        "The University of Chicago Press",
        2011,
        -800,
        30,
        true,
        illiadImg,
        [Tags.LIT]
    ),

    BookFactory(
        8282,
        "Gravity and Grace",
        "Simone Weil",
        "",
        "Routledge Classics",
        1999,
        1947,
        15,
        true,
        gravityImg,
        [Tags.MYSTICISM, Tags.THEOLOGY]
    ),

    BookFactory(
        6565,
        "The Abolition of Man",
        "C.S. Lewis",
        "",
        "Harper One",
        1974,
        1944,
        10,
        false,
        lewisImg,
        [Tags.EPIS, Tags.ETHICS]
    ),

    BookFactory(
        9090,
        "Beyond Good and Evil",
        "Friedrich Nietzsche",
        "Walter Kaufmann",
        "Random House",
        1966,
        1886,
        25,
        true,
        beyondGoodImg,
        [Tags.PSYCH, Tags.ETHICS, Tags.EPIS]
    ),

    BookFactory(
        1055,
        "The Origins of Totalitarianism",
        "Hannah Arendt",
        "",
        "Houghton Mifflin Harcourt",
        1976,
        1951,
        30,
        false,
        arendtImg,
        [Tags.POLITICS]
    ),

    BookFactory(
        generateUniqueID(bookIDs),
        "Brave New World",
        "Aldous Huxley",
        "",
        "Harper Perennial",
        2006,
        1932,
        20,
        false,
        braveNewImg,
        [Tags.LIT]
    ),
    BookFactory(
        generateUniqueID(bookIDs),
        "Leisure The Basis of Culture",
        "Josef Pieper",
        "Alexander Dru",
        "Ignatius Press",
        2009,
        1952,
        20,
        true,
        leisureBasisImg,
        [Tags.POLITICS, Tags.ETHICS]
    ),
    BookFactory(
        generateUniqueID(bookIDs),
        "Nicomachean Ethics",
        "Aristotle",
        "Martin Ostwald",
        "Prentice Hall",
        1999,
        -350,
        20,
        true,
        nicomacheanImg,
        [Tags.ETHICS]
    ),
];

//this is array of image file referances for the home page so i dont have to move around all the book data when
//i really only need to render an image of the book, again this is set up to automatically generate so i dont have to
//update multiple things
export const Images: any[] = Books.map((book) => book.imageRef);

export default Books;
