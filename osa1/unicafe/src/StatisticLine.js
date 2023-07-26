const StatisticLine = (props) => {
    if(props.text == 'average'){
        const avg = (props.statistic['good']+(props.statistic['neutral']*0)+
                    (props.statistic['bad']*(-1)))/props.statistic['all']
        return(
            <tr>
             <td>Average</td>
             <td>{avg.toFixed(2)}</td>
            </tr>
        )
    }
    if(props.text == 'positive'){
        const positiveRate = 100*props.statistic['good']/props.statistic['all']
        return(
            <tr>
             <td>Positive</td>
             <td>{positiveRate.toFixed(2)} %</td>
            </tr>
        )
    }
    return(
        <tr>
         <td>{props.text}</td> 
         <td>{props.statistic[props.text]}</td>
        </tr>
    )
}

export default StatisticLine;