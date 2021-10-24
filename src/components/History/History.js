import React from 'react'

export default function History({history, clearHistory}) {
    console.log(history)

    return (
        <div style={{display:"flex"}}>
        <ul style={{display:"flex" , listStyleType:'none'}}>
          {history.map((result, index /* <= ()  {}  */) => (
            <li style={{margin:"5px"}}key={index}>{result}</li>
          ))}
        </ul>
      {history.length > 0 &&  <button type='button' onClick={clearHistory}>Clear History</button>
      }
       
      </div>
    )
}
