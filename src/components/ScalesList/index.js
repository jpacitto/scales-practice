import './ScalesList.css';

import scalesList from '../../data/ScalesList';

function ScalesList(props)
{
    return (
        <div className="scalesList-wrapper">
            <div className="scales-list">
                { scalesList.map((scale, index) => {
                    return <div className={`scale-wrapper pointer-cursor ${props.selectedScale === scale ? "scale-selected" : ""}`}
                            key={index}
                            onClick={() => props.setSelectedScale(scale)}>
                                <div className="scale">
                                    {scale}
                                </div>
                            </div>
                })}
            </div>
        </div>
    );
}

export default ScalesList;