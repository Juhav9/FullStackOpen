import Filtered from "./Filtered"

const Country = ({countries, filter, handleClick, selected, weather}) => {
    
    const filtered = countries.filter(country => {
        const name = country.name.common.toLowerCase()
        if(name.includes(filter.toLowerCase())){
            return country
        }
    })
    if(selected !==null){
        return(
            <Filtered weather={weather} filtered={filtered.filter(country => { if(country.name.common===selected)
                                                                {return country}})} />
        )
    }
    if(filtered.length>10){
        return(
            <>
                <p>Too many matches, specify another filter</p>
            </>
        )
    }
    if(filtered.length===1){
        handleClick(filtered[0])
        return(
        <Filtered  filtered={filtered}/>
        )
    }
    return(
        <>
        {filtered.map((country) => {
            const name = country.name.common.toLowerCase()
            if(name.includes(filter.toLowerCase())){
                return(
                   <p key={country.name.common}
                   >{country.name.common} <button onClick={() => handleClick(country)} 
                                           key={country.name.common}
                                           >show</button>
                    </p>
                )   
            }
        })
    }
    </>
)
}
export default Country

