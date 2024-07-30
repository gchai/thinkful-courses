import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Layout/NotFound";
import DeckList from "./Deck/List";
import AddDeck from "./Deck/Add";
import EditDeck from "./Deck/Edit";
import Card from "./Card/Card";
import CardList from "./Card/List";
import AddCard from "./Card/Add";
import EditCard from "./Card/Edit";

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DeckList />} />
      <Route path="/decks/new" element={<AddDeck />} />
      <Route path="/decks/:id/cards/new" element={<AddCard />} />
      <Route path="/decks/:id/cards/:cardId/edit" element={<EditCard />} />
      <Route path="/decks/:id/edit" element={<EditDeck />} />
      <Route path="/decks/:id/study" element={<Card />} />
      <Route path="/decks/:id" element={<CardList />}>
      <Route path="study" element={<Card />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRoutes;
