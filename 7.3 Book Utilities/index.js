'use strict';
/*-------------------------------------------------------
1.create 2 book objects with properties: name, author, year.
--------------------------------------------------------*/
let book1 ={
    name: "Achive Goals",
    auther: "Zehava Bar Gil",
    year: 2020, 
}

let book2 ={
    name: "Goldiocks and Tree Bears",
    auther: "Robert Southey",
    year: 1837, 
}
console.log(book1);
console.log(book2);

//*2
let bookUtils = {};

//*3 
// bookUtils = {getFirstPublished: function(book1 ,book2 ) {return (book1['year']='2020')>(book2['year']='1837') ? book2.year : book1.year}}
// console.log(bookUtils.getFirstPublished())

//*4

let book = {name: "Achive Goals", auther: "Zehava Bar Gil", year: 2020};
bookUtils = {setNewEdition: function(book, year) {book.latestEdition=2021}}
bookUtils.setNewEdition(book,2019)
console.log('book latest edition is:' +book.latestEdition)

//*5

bookUtils = {setLanguage: function(book, language) {book.language='hebrew'}}
bookUtils.setLanguage(book,'hebrew')
console.log('book language is:' + book.language)

//*6

bookUtils = {setTranslation: function(book, language, translator) {book.translation= 'Spanish '+'Speedy Gonzales'}};
bookUtils.setTranslation(book,('Spanish ','Speedy Gonzales'));
console.log('book translation is:' + book.translation);

//*7

bookUtils = {setPublisher: function(book, name, location) {bookUtils.publisher='Achive Goals'+'Israel'}}
bookUtils.setPublisher(book,'Achive Goals'+'Israel')
console.log('book publisher is:' + book.translation)

//*8

let book1 ={
    name: "Achive Goals",
    auther: "Zehava Bar Gil",
    year: 2020, 
}

let book2 ={
    name: "Goldiocks and Tree Bears",
    auther: "Robert Southey",
    year: 1837, 
}
bookUtils = {setPublisher: function(book1 , book2) {returns (book1['publisher'])=
(book2['publisher'] && book1['location'])=(book2['location'])? true:false}}
console.log(bookUtils.setPublisher())

