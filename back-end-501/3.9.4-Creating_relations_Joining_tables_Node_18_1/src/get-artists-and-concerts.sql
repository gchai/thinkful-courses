SELECT
    a.artist_name,
    c.concert_name,
    c.concert_date,
    ac.scheduled_start_at,
    ac.scheduled_end_at
FROM
    artists a
    INNER JOIN artists_concerts ac ON a.artist_id = ac.artist_id
    INNER JOIN concerts c ON ac.concert_id = c.concert_id