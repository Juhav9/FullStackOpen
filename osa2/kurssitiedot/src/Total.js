const Total = ({course}) => {
    const exercises = course.parts.map(exe => exe.exercises)
    const init = 0
    const total = exercises.reduce((x, y) => x + y, init)
    return(
        <>
         <p><b>total of {total} exercises</b></p>
        </>
    )
}

export default Total;