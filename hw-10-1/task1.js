const Book = require('./Book');
const EBook = require('./EBook');

// --- Створення екземплярів Book ---

const book1 = new Book(
    'Гаррі Поттер і філософський камінь',
    'Дж. К. Ролінг',
    1997
);
const book2 = new Book('Мистецтво програмування', 'Дональд Кнут', 1968);
const book3 = new Book('Пригоди Шерлока Холмса', 'Артур Конан Дойл', 1892);

console.log('Опис книг (Book):');
book1.printInfo();
book2.printInfo();
book3.printInfo();


console.log('\nПеревірка геттерів/сеттерів для Book:');
console.log('Before:', book1.year);
book1.year = 2000;
console.log('After:', book1.year);

try {
    book1.year = -10;
} catch (error) {
    console.log('Error while setting year:', error.message);
}

// --- Створення екземплярів EBook ---

const ebook1 = new EBook(
    'Гаррі Поттер і філософський камінь',
    'Дж. К. Ролінг',
    1997,
    'pdf'
);
const ebook2 = new EBook(
    'Мистецтво програмування',
    'Дональд Кнут',
    1968,
    'epub'
);

console.log('\nОпис електронних книг (EBook):');
ebook1.printInfo();
ebook2.printInfo();


console.log('\nПеревірка геттерів/сеттерів для EBook:');
console.log('Before:', ebook1.fileFormat);
ebook1.fileFormat = ' mobi ';
console.log('After:', ebook1.fileFormat);

try {
    ebook1.fileFormat = '';
} catch (error) {
    console.log('Error while setting fileFormat:', error.message);
}

// --- Статичний метод Book.findOldest з масивом Book + EBook ---

const mixedBooks = [book1, book2, book3, ebook1, ebook2];

const oldest = Book.findOldest(mixedBooks);
console.log('\nНайдавніша книга (Book.findOldest з Book + EBook):');
oldest.printInfo();

// --- Статичний метод EBook.fromBook ---

console.log('\nСтворення EBook зі звичайної книги (EBook.fromBook):');

const plainBook = new Book('1984', 'Джордж Орвелл', 1949);
const ebookFromBook = EBook.fromBook(plainBook, 'pdf');

ebookFromBook.printInfo();
