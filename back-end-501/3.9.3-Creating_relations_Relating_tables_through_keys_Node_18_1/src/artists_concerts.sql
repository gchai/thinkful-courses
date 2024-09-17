create table artists_concerts
(
artist_id integer references artists(artist_id) not null unique,
concert_id integer references concerts(concert_id) not null unique,
scheduled_start_at time,
scheduled_end_at time,
primary key (artist_id, concert_id)
)