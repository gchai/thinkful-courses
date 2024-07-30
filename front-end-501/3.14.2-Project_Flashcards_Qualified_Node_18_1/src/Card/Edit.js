import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";

function EditCard() {
  const { id, cardId } = useParams();
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState([{}]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialFormState = {
    front: "",
    back: "",
    deckId: "",
    id: "",
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
    if (card) {
      setFormData({
        front: card.front,
        back: card.back,
        deckId: deck.id,
        id: card.id,
      });
    }
  }, [card, deck.id]);

  useEffect(() => {
    const abortController = new AbortController();
    if (deck.cards && deck.cards.length > 0) {
      readCard(cardId, abortController.signal)
        .then((response) => {
          setCard(response);
        })
        .catch((error) => {
          setError(error);
        });
    }
    return () => abortController.abort();
  }, [cardId, deck.cards]);

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateCard(formData);
    window.location = `/decks/${id}`;
  };

  const backHandler = () => {
    navigate(`/decks/${id}`);
  };

  if (error) {
    return <p>{`Error message: ${error}`}</p>;
  }

  const pageData = {
    page: "Edit Card",
    cardId: card.id,
    deckName: deck.name,
    deckId: deck.id,
  };

  return (
    <div>
      <Breadcrumb pageData={pageData} />
      <h2>{deck.name}: Edit Card</h2>
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

export default EditCard;
