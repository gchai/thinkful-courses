import React, { useEffect, useState } from "react";
import { readDeck, deleteDeck, deleteCard } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../Layout/Breadcrumb";

function CardList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState([{}]);
  const [error, setError] = useState(null);

  const deleteHandler = async (id, type) => {
    if (type === "card")  {
      const result = window.confirm(
        "Do you want to delete this card?"
      );
      if (result) {
        await deleteCard(id);
        window.location.reload();
      }
    } else {
      const result = window.confirm(
        "Do you want to delete this deck?"
      );
      if (result) {
        await deleteDeck(id);
        window.location = "/";
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    readDeck(id, abortController.signal)
      .then((response) => {
        setDeck(response);
      })
      .catch((error) => {
        setError(error);
      });

    return () => abortController.abort();
  }, [id]);

  const list = Array.isArray(deck.cards)
    ? deck.cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <h5 className="card-title">Card Front</h5>
                <p>{card.front}</p>
              </div>
              <div className="col-5">
                <h5 className="card-title">Card Back</h5>
                <p>{card.back}</p>
              </div>
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => navigate(`cards/${card.id}/edit`)}>
              Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(card.id, "card")}>
              <i class="bi bi-trash-fill"></i> Delete
            </button>
          </div>
        </div>
      ))
    : null;

    if (error) {
      return <p>{`Error message: ${error}`}</p>;
    }

  const pageData = {
    page: "Card List",
    cardId: null,
    deckName: deck.name,
    deckId: deck.id,
  };

  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <Breadcrumb pageData={pageData} />
        <h1>{deck.name}</h1>
        <p>{deck.description}</p>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("edit")}>
          <i class="bi bi-pencil-square"></i> Edit
        </button>
        <button type="button" className="btn btn-primary" onClick={() => navigate("study")}>
          <i class="bi bi-book-fill"></i> Study
        </button>
        <button type="button" className="btn btn-primary" onClick={() => navigate("cards/new")}>
          <i class="bi bi-plus-lg"></i> Add Cards
        </button>
        <button type="button" className="btn btn-danger" onClick={() => deleteHandler(id, "deck")}>
          <i class="bi bi-trash-fill"></i> Delete
        </button>
        <h2>Cards:</h2>
        {list}
      </div>
    </div>
  );
}

export default CardList;
