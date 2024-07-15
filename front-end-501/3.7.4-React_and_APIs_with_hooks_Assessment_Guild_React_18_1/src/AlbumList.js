import React, { useState, useEffect } from "react";

function AlbumList({ user = {} }) {
  //Load albums from https://jsonplaceholder.typicode.com/albums?userId=${user.id}.
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    let abortController = new AbortController();

    async function loadAlbum(){
      try{
        if(user.id){
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
            {signal: abortController.signal}
          );
          const albumFromAPI = await response.json()
          console.log("setAlbums", albumFromAPI);
          setAlbums(albumFromAPI);
        }
      } catch (error) {
        if(error.name === "AbortError"){
          console.log("Aborted")
        } else throw error;
      }
    }
    loadAlbum();

    return () => {
      console.log("Cleanup")
      abortController.abort();
    }
  })

  return <div>
    {user.name ? <p>{user.name}</p>: <p>Please click a username on the left</p>}
    {albums.map(album => <p key={album.id}>{album.title}</p>)}
  </div>
}

export default AlbumList;
