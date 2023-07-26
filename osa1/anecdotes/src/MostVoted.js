const MostVoted = (props) =>{
    let index = 0;
    let value = 0;
    for(let i = 0; i < props.votes.length; i++){
        if(props.votes[i]>=value){
            index = i;
            value = props.votes[i];
        }
    }
    return(
        <>
         <p>Anecdote with most votes</p>
         <br/>
         <p>{props.anecdote[index]}</p>
         <p>has {props.votes[index]} votes</p>
        </>
    )
}

export default MostVoted;