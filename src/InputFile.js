import React, {useState} from 'react';
import  *as Papa  from 'papaparse';
import { v4 as uuidv4 } from 'uuid';

// const initialState = [
//     "Full Name" ,
//     "Phone",
//     "Email",
//     "Age",
//     "Experience",
//     "Yearly Income",
//     "Has children",
//     "License states",
//     "Expiration date",
//     "Expiration date",
//     "ID",
//     "Duplicate ID",
// ]

const InputFile =() => {
    const [table, setTable] = useState(null)


    const readFile = (e) => {
        // console.log(e)
    }

    const downloadFile =(e) => {
        // console.log(e.target.files[0])
        Papa.parse(e.target.files[0], {
            download: true,
            header: false,
            dynamicTyping: true,
            skipEmptyLines: true,
            withCredentials: true,
 
	    complete: function(results) {
        results.data.map((item, idx) => (idx === 0) ?item.push("ID") : item.push(uuidv4()))
        // console.log(results.data)
        setTable(results.data)
	    }

    });
   
    }

return (
    <>
<input type="file" id="csv" accept=".csv"  onChange = {downloadFile}/>
<button type="button" onClick={readFile}> Read File </button>
<table className="table">
<tbody>
 {table && table.map(row=> (<tr key={row[10]}>{ row.map(item => (<td className="td" key={uuidv4()}>{item}</td>)) }</tr>)) }
 </tbody>
</table>
</>
)

}

export default InputFile