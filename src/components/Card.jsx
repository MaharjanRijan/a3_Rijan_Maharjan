function Card({value, suit, isPicked,onClick}) {
    return (
        <div className={`card ${isPicked ? 'picked' : ''}`} 
            onClick={onClick}>
            <div className="card-value">{value}</div>
            <div className="card-suit">{suit}</div>
        </div>
    );
}