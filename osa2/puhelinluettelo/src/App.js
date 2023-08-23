import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './service/persons' 
import Info from './components/Info'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)


  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };

  const handleSetPerson = (event) =>{
    event.preventDefault()
    if(persons.some(person => person.name===newName)){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)){
        const upDatePerson = {name: newName,
                              number: newNumber}
        const updatedId = persons.find(({name}) => name===newName)

        personService
          .updateData(updatedId.id, upDatePerson)
          .then(update => {
            let newArr = persons.filter(p => p.name !== update.name)
            setPersons(newArr.toSpliced(update.id - 1, 0, update))

            setNewName('')
            setNewNumber('')
            setInfo(`Updated ${update.name}`)
            
            setTimeout(() => {
              setInfo(null)
            }, 5000)})
            .catch(error => {
              setError(`Information of ${newName} has already been removed from server`)
              setNewName('')
              setNewNumber('')

              setTimeout(() => {
                setError(null)
              }, 5000)
            })
      }
    }
    else{
      const newPerson = {name: newName,
                      number: newNumber
      }
      personService
        .postData(newPerson)
        .then(person =>{
          setPersons(persons.concat(person))

          setNewName('')
          setNewNumber('')
          setInfo(`Added ${person.name}`)

          setTimeout(() =>{
            setInfo(null)
          }, 5000)})
    }
  };

  const getJsonData = () => {
    personService
      .getData()
      .then(personData => setPersons(personData))
  };

  useEffect(getJsonData, [])
  
  const handleDeletePerson = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)){
      personService
        .deleteData(id)
        .then(data => {if(data.status===200){
          const newArr = persons.filter(person => {if(person.id!==id){
            return person
          }})
          setPersons(newArr.map(person => person))

          setInfo(`Deleted ${name}`)
          setTimeout(() => {
            setInfo(null)
          }, 5000)
        }})
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Info info={info} error={error}/>
      <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm handleNoteChange={handleNoteChange} handleNumberChange={handleNumberChange}
                  handleSetPerson={handleSetPerson} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleDelete={handleDeletePerson}/>
    </div>
  )

}

export default App;