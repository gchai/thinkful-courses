import React, { useState } from "react";

function DogForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [age, setAge] = useState("")
    
    const handleName = (event) => setName(event.target.value);
    const handleBreed = (event) => setBreed(event.target.value);
    const handleAge = (event) => setAge(event.target.value);
  
    const handleSubmit = (event) => {
      event.preventDefault()
      setName("")
      setBreed("")
      setAge("")
      console.log(name, breed, age)
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" onChange={handleName} value={name}/>
        </label>
        <label htmlFor="breed">
          Breed:
          <input id="breed" type="text" name="breed" onChange={handleBreed} value={breed}/>
        </label>
        <label htmlFor="age">
          Age:
          <input id="age" type="text" name="age" onChange={handleAge} value={age}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
export default DogForm;
