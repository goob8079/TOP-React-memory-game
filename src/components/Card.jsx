import '../css/card.css';

export function Card(props) {
    return (
        <div className="card" key={props.name} onClick={props.onClick}>
            <img src={props.img} alt={props.name} />
            <span><strong>{props.name}</strong></span>
        </div>
    )
}