import './ToggleIntervalDisplay.css';

function ToggleIntervalDisplay(props)
{
    const handleChange = (event) => {
        props.toggleIntervals(event.target.checked);
    }
    return (
        <div className="toggle-interval">
            <input type="checkbox" name="intervalToggle" className="pointer-cursor" onChange={handleChange}/>
            <label for="intervalToggle">Display Intervals</label>
        </div>
    );
}

export default ToggleIntervalDisplay;