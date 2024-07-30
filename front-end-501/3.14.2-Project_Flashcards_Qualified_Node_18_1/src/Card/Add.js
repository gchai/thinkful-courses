import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";
import CardForm from "./Form";

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

  const submitHandler = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try{
      await createCard(id, formData, abortController.signal);
      navigate(`/decks/${id}`)
    } catch (error) {
      console.error(`Error message: ${error}`)
    }
  }

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
      <CardForm
        submitHandler={submitHandler}
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  );
}

export default AddCard;
