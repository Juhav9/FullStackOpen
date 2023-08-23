import Part from "./Part";
import Total from "./Total";
import Header from "./Header";

const Content = ({course}) => {
    return(
        <>
         <Header  course={course}/>
         {course.parts.map(p =>
            <Part key={p.id} name={p.name} exercise={p.exercises}/>)}
         <Total course={course}/>
        </>
    )
}

export default Content;