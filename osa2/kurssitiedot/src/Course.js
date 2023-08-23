import Content from "./Content"

const Course = ({courses}) => {
    return(
        <>
        <h1>Web development curriculum</h1>
        {courses.map(course =>
            <Content key={course.id} course={course}/>)}
        </>
    )
}

export default Course;