function Card(props) {

    const {description, name, priority, status} = props.cards;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
                <p className="card-text">{description}</p>
                <p className="card-text">Priority: {priority}</p>
                <button type="button" className="btn btn-outline-primary"
                        disabled={props.cards.status === props.columns[0]}
                        onClick={() => props.nextStatus(props.cards, 'left')}>←
                </button>
                <button type="button" className="btn btn-outline-primary"
                        disabled={props.cards.status === props.columns[props.columns.length - 1]}
                        onClick={() => props.nextStatus(props.cards, 'right')}>→
                </button>
                <button type="button" className="btn btn-outline-primary">↑</button>
                <button type="button" className="btn btn-outline-primary">↓</button>

                <button type="button" className="btn btn-outline-danger"
                        onClick={() => props.deleteTask(props.cards)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;