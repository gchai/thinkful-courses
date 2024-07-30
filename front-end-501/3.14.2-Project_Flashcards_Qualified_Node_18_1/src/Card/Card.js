import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, readCard } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";

function Card() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});
  const [currCard, setCurrCard] = useState(0);
  const [error, setError] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    if (cards && cards.length > 0) {
      readCard(cards[currCard].id, abortController.signal)
        .then((response) => {
          setCard(response);
        })
        .catch((error) => {
          setError(error);
        });
    }
    return () => abortController.abort();
  }, [cards, currCard]);

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

  useEffect(() => {
    const abortController = new AbortController();

    if (deck.cards && deck.cards.length > 0) {setCards(deck.cards);}
    return () => abortController.abort();
  }, [deck.cards]);

  const nextHandler = (event) => {
    event.preventDefault();
    setIsFlipped(false);
    if (currCard < cards.length - 1) {
      setCurrCard(currCard + 1);
    } else if (currCard === cards.length - 1) {
      const restart = window.confirm("Restart cards?");
      if (restart) {setCurrCard(0);} 
      else {navigate("/");}
    }
  };

  const flipHandler = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const pageData = {
    page: "Study",
    cardId: card.id,
    deckName: deck.name,
    deckId: deck.id,
  };

  if (error) {
    return <p>{`Error message: ${error}`}</p>;
  }


  if (cards.length < 3) {
    return (
      <div className="row justify-content-center">
        <div className="col-9">
          <Breadcrumb pageData={pageData} />
          <h1>Study: {deck.name}</h1>
          <div>
            <h3>Not enough cards</h3>
            <p>
              You need at least 3 cards to study. There{" "}
              {cards.length === 1
                ? ` is 1 card in this deck.`
                : ` are ${cards.length} cards in this deck.`}
            </p>
            <button type="button" className="btn btn-primary" onClick={() => navigate(`/decks/${id}/cards/new`)}>
              <i className="bi bi-plus-lg"></i> Add Cards
            </button>
          </div>
        </div>
      </div>
    );
    
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-9">
          <Breadcrumb pageData={pageData} />
          <h1>Currently Studying: {pageData.deckName}</h1>
          <div>
            <h4>
              Card {currCard + 1} of {cards.length}
            </h4>
            <p>{`${isFlipped ? card.back : card.front}`}</p>
            <button type="button" class="btn btn-secondary" onClick={flipHandler}>
              Flip
            </button>
            {isFlipped ? (
              <button type="button" class="btn btn-secondary" onClick={nextHandler}>
                Next
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }


}

export default Card;
