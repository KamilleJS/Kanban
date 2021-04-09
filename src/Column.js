import Card from "./Card";

function Column(props) {
    const colorMap = {
        todo: 'border-secondary',
        progress: 'border-primary',
        review: 'border-warning',
        done: 'border-success',
    };

    return (
        <div className="col text-capitalize">
            <h3 className={`border-bottom border-10 ${colorMap[props.status.title]} pb-2`}><center>{props.status.title}</center></h3>
            {props.cards
                .filter(el => props.status.status === el.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <Card
                    cards={el}
                    key={el._id}
                    nextStatus={props.nextStatus}
                    columns={props.columns}
                    priority={props.priority}
                    deleteTask={props.deleteTask}
                    editTask={props.editTask}
                    changePriority={props.changePriority}
                />)}
        </div>
    );
};

export default Column;