import './ClearButton.css';

function ClearButton(props)
{
    return (
        <div className="clear-button pointer-cursor" onClick={props.clearSelected}>
            Clear Selected
        </div>
    );
}

export default ClearButton;