const Card = (props) => {
    return (
        <div className="cards">
            <div className="card-gradient" />
            <img src={props.cardImage} alt={props.altText} />
            <h2>{props.cardName}</h2>
            <p>{props.cardText}</p>
        </div>
    );
}

export default Card;