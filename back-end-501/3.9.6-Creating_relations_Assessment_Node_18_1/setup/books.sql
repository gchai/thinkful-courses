create table books (
    book_id integer primary key generated by default as identity,
    title varchar(255) not null,
    publication_year integer,
    in_stock boolean default 'true',
    author_id integer references authors(author_id) not null
)