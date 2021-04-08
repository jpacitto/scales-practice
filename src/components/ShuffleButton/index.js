import './ShuffleButton.css';

function ShuffleButton(props)
{
    return (
        <div className="shuffle-button pointer-cursor" onClick={props.newRandomNote}>
            Random Note
        </div>
    );
}

export default ShuffleButton;