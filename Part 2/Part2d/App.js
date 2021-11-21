import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/Persons'
import phoneBook from './services/phonebook'
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName] = useState('')
  useEffect(() => {
    phoneBook.getData().then(info =>
    setPersons(info)
    )
  }
    ,[])
  const nameCheck = persons.filter(person => person.name===newName)
  const handleNewPerson = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const addPerson = (event) => {
    event.preventDefault()
    const newPersonInfo = {
      name: newName,
      number: newNumber
    }
    if(nameCheck.length>0){
      let newNumber = window.confirm(`${newName} is already added to phonebook, replace old number with a new one`)
      if(newNumber) {
        phoneBook.updateNumber(nameCheck[0].id, newPersonInfo).then(updating => {setPersons(persons.map(number => (number.id !== nameCheck[0].id) ? number:updating))})
      }
    } else {
    phoneBook.updateInfo(newPersonInfo).then(newInfo =>
    setPersons(persons.concat(newInfo)))}
    setNewName('')
    setNewNumber('')
  }
  const handleFilter = (event) => setFilterName(event.target.value)
  let nameContain = new RegExp(filterName,'i')
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <PersonForm newName={newName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons persons={persons} nameContain={nameContain} filterName={filterName} setPersons={setPersons}/>
    </div>
  )
}

export default App
