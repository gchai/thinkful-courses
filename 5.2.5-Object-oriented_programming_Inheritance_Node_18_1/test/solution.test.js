const { expect } = require("chai");
const { Media, Book, Movie } = require("../src/solution");

describe("tests", () => {
  describe("Media class", () => {
    it("Media class has correct attributes", () => {
      const media = new Media("bob");
      expect(media.name).to.equal("bob");
      expect(media.reviews).to.deep.equal([]);
    });
    it("addReview single", () => {
      const media = new Media("bob");
      media.addReview("it was good");
      expect(media.reviews).to.deep.equal(["it was good"]);
    });
    it("addReview double", () => {
      const media = new Media("bob");
      media.addReview("it was good");
      media.addReview("it was bad");
      expect(media.reviews).to.deep.equal(["it was good", "it was bad"]);
    });
  });
  describe("Book class", () => {
    it("Book class has correct attributes", () => {
      const book = new Book("1984", "George Orwell");
      expect(book.name).to.equal("1984");
      expect(book.author).to.equal("George Orwell");
      expect(book.reviews).to.deep.equal([]);
    });
    it("Book class inherits from Media class", () => {
      const book = new Book("1984", "George Orwell");
      expect(book).to.be.an.instanceof(Media);
    });
  });
  describe("Movie class", () => {
    it("Movie class has correct attributes", () => {
      const movie = new Movie("Inside Out", "Pete Docter");
      expect(movie.name).to.equal("Inside Out");
      expect(movie.director).to.equal("Pete Docter");
      expect(movie.reviews).to.deep.equal([]);
    });
    it("Movie class inherits from Media class", () => {
      const movie = new Movie("Inside Out", "Pete Docter");
      expect(movie).to.be.an.instanceof(Media);
    });
  });
});
