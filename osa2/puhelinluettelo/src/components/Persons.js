const Persons = ({persons, filter, handleDelete}) => {
    return(
        <div>
          {persons.map(person => {
            const name = person.name.toLocaleLowerCase()
            if(name.includes(filter.toLowerCase())){
              return(
              <p key={person.id}>{person.name} {person.number} <button onClick={() => 
                                                                handleDelete(person.id, person.name)}>delete
                                                                </button> 
              </p> 
              )
            }

            })}
        </div>
    )
}

export default Persons;