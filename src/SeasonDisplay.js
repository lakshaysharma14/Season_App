import React from 'react';
import './SeasonDispalay.css';

const seasonConfig =
{
    summer:
    {
        text:"Let's hit the beach",
        iconName:'sun'

    },
    winter:{
        text:"Blurr its chill",
        iconName:'snowflake'
    }
}

const getSeason = (latitude,month) =>{

    if(month>2 && month<9)
    {
        return latitude > 0 ? 'summer':'winter';
    }
    else
    {
        return latitude >0 ?'winter':'summer';
    }
}

const SeasonDisplay = ({lat}) =>
{
    console.log(lat);
    const season = getSeason(lat,new Date().getMonth());
    const {text,iconName} =seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
             <i className={`icon-left massive ${iconName} icon`} />
             <h2>{text}</h2>
             <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;

