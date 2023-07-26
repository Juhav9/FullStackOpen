const Anecdote = (props) => {
    return(
        <>
          <h1>Anecdote of the day</h1>
          <p>{props.anecdote[props.selected]}</p>
          <p>has {props.votes[props.selected]} votes</p>
        </>
    )
}   
export default Anecdote