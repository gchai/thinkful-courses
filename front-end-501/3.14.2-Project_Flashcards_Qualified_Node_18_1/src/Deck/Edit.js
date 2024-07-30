import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";

function EditDeck() {
  const { id } = useParams();
  const [deck, setDeck] = useState([{}]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialFormState = {
    id: "",
    name: "",
    description: "",
    cards: [],
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  useEffect(() => {
    const abortController = new AbortController();

    readDeck(id, abortController.signal)
      .then((response) => {
        setDeck(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  useEffect(() => {
    if (deck) {
      setFormData({
        id: deck.id,
        name: deck.name,
        description: deck.description,
        cards: deck.cards,
      });
    }
  }, [deck]);

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(formData);
    window.location = `/decks/${id}`;
  };

  const backHandler = () => {
    navigate(`/decks/${id}`);
  };

  if (error) {
    return <p>{`Error message: ${error}`}</p>;
  }

  const pageData = {
    page: "Edit Deck",
    cardId: null,
    deckName: deck.name,
    deckId: deck.id,
  };

  return (
    <div>
      <Breadcrumb pageData={pageData} />
      <h2>Editing Deck</h2>
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

export default EditDeck;
