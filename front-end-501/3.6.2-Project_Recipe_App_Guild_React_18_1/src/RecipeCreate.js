import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addRecipe({ name, cuisine, photo, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </td>
            <td>
              <input
                name="cuisine"
                placeholder="Cuisine"
                type="text"
                value={cuisine}
                onChange={({ target }) => setCuisine(target.value)}
              />
            </td>
            <td>
              <input
                name="photo"
                placeholder="URL"
                type="url"
                value={photo}
                onChange={({ target }) => setPhoto(target.value)}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}
                onChange={({ target }) => setIngredients(target.value)}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={preparation}
                onChange={({ target }) => setPreparation(target.value)}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
