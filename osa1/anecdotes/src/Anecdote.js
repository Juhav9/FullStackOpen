const Anecdote = (props) => {
    return(
        <>
          <p>{props.anecdote[props.selected]}</p>
          <p>has {props.votes[props.selected]} votes</p>
        </>
    )
}   
export default Anecdote