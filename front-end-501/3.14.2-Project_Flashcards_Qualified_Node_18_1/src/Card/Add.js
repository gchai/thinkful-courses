import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";

function AddCard() {
  const { id } = useParams();
  const [deck, setDeck] = useState([{}]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initFormState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initFormState });

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

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createCard(id, formData);
    setFormData({ ...initFormState });
    window.location = `/decks/${id}`;
  };

  const backHandler = () => {
    navigate(-1);
  };

  if (error) {
    return <p>{`Error message: ${error}`}</p>;
  }

  const pageData = {
    page: "Add Card",
    cardId: null,
    deckName: null,
    deckId: null,
  };

  return (
    <div>
      <Breadcrumb pageData={pageData} />
      <h2>{deck.name}</h2>
      <form onSubmit={submitHandler} name="create">
        <div className="mb-1">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            id="cardFront"
            name="front"
            required={true}
            onChange={changeHandler}
            className="form-control"
            value={formData.front}
          ></textarea>
        </div>
        <div className="mb-1">
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            id="cardBack"
            name="back"
            required={true}
            onChange={changeHandler}
            className="form-control"
            value={formData.back}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={backHandler}>
          Cancel
        </button>
    </form>
    </div>
  );
}

export default AddCard;
