SELECT
    a.artist_name AS artist,
    s.song_name,
    s.album_name AS album
FROM
    artists a
    FULL JOIN songs s ON a.artist_id = s.artist