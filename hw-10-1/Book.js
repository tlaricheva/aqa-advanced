class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }
        this._title = value.trim();
    }

    
    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Author must be a non-empty string');
        }
        this._author = value.trim();
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (
            typeof value !== 'number' ||
            !Number.isInteger(value) ||
            value <= 0
        ) {
            throw new Error('Year must be a positive integer number');
        }
        this._year = value;
    }

    
    printInfo() {
        console.log(`"${this.title}" — ${this.author}, ${this.year} рік`);
    }

    
    static findOldest(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('books must be a non-empty array');
        }

        let oldest = books[0];

        for (const book of books) {
            if (!(book instanceof Book)) {
                throw new Error(
                    'All items in array must be instances of Book'
                );
            }

            if (book.year < oldest.year) {
                oldest = book;
            }
        }

        return oldest;
    }
}

module.exports = Book;
