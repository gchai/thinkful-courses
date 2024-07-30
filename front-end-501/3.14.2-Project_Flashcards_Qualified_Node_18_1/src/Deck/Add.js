import React, { useState } from "react";
import { createDeck } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../Layout/Breadcrumb";

function AddDeck() {
  const navigate = useNavigate();

  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try{
      await createDeck(formData, abortController.signal);
      backHandler()
    } catch (error) {
      console.error(`Error message: ${error}`)
    }
  }

  const backHandler = () => {
    navigate("/");
  };

  const pageData = {
    page: "Create Deck",
    cardId: null,
    deckName: null,
    deckId: null,
  };

  return (
    <div>
      <Breadcrumb pageData={pageData} />
      <h2>Create Deck</h2>
      <form onSubmit={submitHandler} name="create">
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="deckName"
            name="name"
            required={true}
            onChange={changeHandler}
            className="form-control"
            value={formData.name}
          ></input>
        </div>
        <div className="mb-1">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="deckDescription"
            name="description"
            required={true}
            onChange={changeHandler}
            className="form-control"
            value={formData.description}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={backHandler}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddDeck;
