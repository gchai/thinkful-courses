SELECT
  a.artist_name,
  s.song_name,
  s.album_name
  FROM songs s
  LEFT JOIN artists a 
  ON a.artist_id = s.artist