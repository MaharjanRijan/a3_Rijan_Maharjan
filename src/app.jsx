function App() {

   const suits = ['♠', '♥', '♦', '♣'];
   const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

   const [deck, setDeck] = React.useState(() => {
        const cards = [];
        for (let suit of suits) {
            for (let value of values) {
                cards.push({ suit, value });
            }
        }
        return cards;
    });

    const [displayedCards, setDisplayedCards] = React.useState([]);

    const dealCards = (num) => {
        if (deck.length === 0) return;

    //Return displayed cards to the deck
    const newDeck = [...deck, ...displayedCards];
    const newDisplayed = [];

    for (let i = 0; i < num; i++) {
        if (newDeck.length === 0) break;

        const randomIndex = Math.floor(Math.random() * newDeck.length);
        newDisplayed.push(newDeck[randomIndex]);
        newDeck.splice(randomIndex, 1);
    }

    setDeck(newDeck);
    setDisplayedCards(newDisplayed);
};

 const resetDeck = () => {
        setDeck([...deck, ...displayedCards]);
        setDisplayedCards([]);
    };

    return (
        <div>
            <h1>Card Game</h1>
            <p>Welcome to the card game!</p>
            <div 
                className="deck"
                onClick={() => {
                if (deck.length === 0) return;
                const randomIndex = Math.floor(Math.random() * deck.length);
                const drawnCard = deck[randomIndex];
                setDisplayedCards([...displayedCards, drawnCard]);
                setDeck(deck.filter((_, i) => i !== randomIndex));
                }}
            >
                {deck.length > 0 ? "Deck" : "No cards remaining"}
            </div>

            <div className="buttons">
                <button onClick={() => dealCards(5)}>+ Deal 5</button>
                <button onClick={() => dealCards(7)}>+ Deal 7</button>
                <button onClick={resetDeck}>Reset</button>
            </div>  

            <div className="card-container">
                {displayedCards.map((card, index) => (
                <Card
                    key={index}
                    value={card.value}
                    suit={card.suit}
                    isPicked={false}
                    onClick={() => alert(`You picked ${card.value}${card.suit}`)}
                />
                ))}
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);