const PersonForm = ({handleSetPerson, handleNoteChange, handleNumberChange,
                    newName, newNumber}) => {

    return(
        <> 
        <form onSubmit={handleSetPerson}>
          <div>
            name: <input placeholder='New name' value={newName} onChange={handleNoteChange}/>
          </div>
          <div>
            number: <input placeholder='New number' value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
        
        </>
    )
}
export default PersonForm;