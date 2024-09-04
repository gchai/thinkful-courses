SELECT
    count(b.book_id)
FROM
    books b
    JOIN authors a ON b.author_id = a.author_id
WHERE
    a.author_name = 'Leo Tolstoy'