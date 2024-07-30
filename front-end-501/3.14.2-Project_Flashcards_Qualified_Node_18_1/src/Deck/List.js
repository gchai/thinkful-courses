import React, { useEffect, useState } from "react";
import { deleteDeck } from "../utils/api";

import { useNavigate } from "react-router-dom";
import { listDecks } from "../utils/api";

function Deck({ id, deckName, deckDescription, length }) {
  const navigate = useNavigate();
  const viewHandler = () => {
    navigate(`decks/${id}`);
  };

  const startHandler = () => {
    navigate(`decks/${id}/study`);
  };

  const deleteHandler = async (id) => {
    const result = window.confirm("Do you want to delete this deck?");
    if (result) {
      await deleteDeck(id);
      window.location.reload();
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{deckName}</h5>
            <p className="card-text">{deckDescription} </p>
            <button type="button" className="btn btn-primary" onClick={startHandler}>
              <i className="bi bi-book-fill"></i> Study
            </button>
            <button type="button" className="btn btn-secondary" onClick={viewHandler}>
              <i className="bi bi-eye-fill"></i> View
            </button>
            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(id)}>
              <i className="bi bi-trash-fill"></i> Delete
            </button>
          </div>
          <div className="card-footer text-body-secondary text-left">
            {length} {length === 1 ? "card" : "cards"}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeckList() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal)
      .then((response) => {
        setDecks(response);
      })
      .catch((error) => {
        setError(error);
      });

    return () => abortController.abort();
  }, []);

  const list = Array.isArray(decks)
    ? decks.map((deck) => (
        <Deck
          key={deck.id}
          id={deck.id}
          deckName={deck.name}
          deckDescription={deck.description}
          length={deck.cards.length}
        />
      ))
    : null;

  const navigate = useNavigate();

  if (error) {
    return <p>{`Error message: ${error}`}</p>;
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-9">
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/decks/new")}>
            <i className="bi bi-plus-lg"></i> Create Deck
          </button>
        </div>
      </div>
      {list}
    </div>
  );
}

export default DeckList;
