SELECT
    count(b.book_id)
FROM
    books b
WHERE
    b.publication_year < 2000