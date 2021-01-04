import React from "react";
import PropTypes from "prop-types";

const SavedCards = ({ cards, handleUsedCards }) => (
  <div className="saved-cards">
    {cards.map((card) => (
      <div
        key={card.paymentId}
        className="flex flex-row-gap-1 saved-cards__flex"
      >
        <span className="saved-cards__card">xxxx xxxx xxxx {card.last4}</span>
        <button
          onClick={() => handleUsedCards(card.paymentId)}
          className="btn btn-outline-primary btn-min"
        >
          use card
        </button>
      </div>
    ))}
  </div>
);

SavedCards.propTypes = {
  cards: PropTypes.array,
  handleUsedCards: PropTypes.func,
};

export default SavedCards;
