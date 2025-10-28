function Card({ value, suit, isPicked, onClick }) {
    const isRed = suit === '♥' || suit === '♦'; 
    const cardColor = isRed ? 'red' : 'black';

    return (
        <div className={`card ${isPicked ? 'picked' : ''}`} onClick={onClick}>
            <div className="card-value" style={{ color: cardColor }}>{value}</div>
            <div className="card-suit" style={{ color: cardColor }}>{suit}</div>
        </div>
    );
}
