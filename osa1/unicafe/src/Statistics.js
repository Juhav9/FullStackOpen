import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    if(props.all===0){
        return(
            <>
                <p>No feedback given</p>
            </>
        )
    }
    return(
        <table>
          <tbody>

            <StatisticLine statistic={props} text='good'/>
            <StatisticLine statistic={props} text='neutral'/>
            <StatisticLine statistic={props} text='bad'/>
            <StatisticLine statistic={props} text='all'/>

            <StatisticLine statistic={props} text='average'/>
            <StatisticLine statistic={props} text='positive'/>
          </tbody>
        </table>
    )
}

export default Statistics;