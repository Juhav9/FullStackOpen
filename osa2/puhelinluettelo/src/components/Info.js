const Info = ({info, error}) => {
    const infoStyle = {
        height: '30px',
        backgroundColor: '#94a0b3',
        padding: '8px 16px',
        borderRadius: '4px',
        margin: '10px 5px',
        border: 'solid green 4px',
        fontSize: '30px'
    }
    const pStyle = {
        margin: 0,
        textAling: 'center',
        color: 'green'
    }
    const errorStyle = {
        ...infoStyle,
        border: 'solid red 4px',
        fontSize: '15px'
    }
    const pErrorStyle = {
        ...pStyle,
        color: 'red'
    }
    if(error!==null){
        return(
            <div style={errorStyle}>
                <p style={pErrorStyle}>{error}</p>
            </div>
        )

    }
    if(info===null){
        return null
    }

    return(
        <div style={infoStyle}>
            <p style={pStyle}>
                {info}
            </p>
        </div>
    )
}

export default Info
