class Media {
	constructor(name) {
		this.name = name;
		this.reviews = [];
	}

	addReview(review) {
		this.reviews.push(review)
	}
}

class Book extends Media {
	constructor(name, author) {
		super(name);
		this.author = author;
	}
}

class Movie extends Media {
	constructor(name, director){
		super(name);
		this.director = director;
	}
}

module.exports = { Media, Book, Movie };
