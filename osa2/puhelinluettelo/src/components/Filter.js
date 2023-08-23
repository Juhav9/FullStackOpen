const Filter = ({handleFilterChange}) => {
    return(
        <div>
          filter show with: <input placeholder='Filter' onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter