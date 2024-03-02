const Board = (props) => {

    return (
        <div className="boards" onClick={props.onClick}>
            <img src={props.image} alt={props.altText} />
            <div className="board-text">
                <h2 className="board-name">{props.name}</h2>
                <h3 className="board-description">{props.desc}</h3>
            </div>
        </div>
    )
}

export default Board;