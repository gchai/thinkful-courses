import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";
import CardForm from "./Form";

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

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try{
      await updateCard(formData, abortController.signal);
      navigate(`/decks/${id}`)
    } catch (error) {
      console.error(`Error message: ${error}`)
    }
  }

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
      <CardForm
        submitHandler={submitHandler}
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  );
}

export default EditCard;
