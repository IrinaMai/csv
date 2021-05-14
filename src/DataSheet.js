import React from 'react';
import { v4 as uuidv4 } from 'uuid';



const DataSheet =({csvData}) => {

    const csvArr =  Object.values(csvData).map(item => [...item.data])
    const restRow = csvArr.filter((item, idx) => ((idx !==0 &&  item[0]) && item.push(uuidv4())))
    const firstRow = [...csvArr[0], "ID"]

   const validateAge =(age) => {
        if(Number.isInteger(Number(age)) && Number(age) >= 21) {
            return Number(age)
        } else {

            return age
        }
    }
    
//   console.log(validateAge("-121"))

 

 





    return(
    <table className="table">
    <thead className = "thead">
    <tr>{firstRow.map((item, idx) => (<td key={idx} className="td">{item}</td>))}</tr>
    </thead>
     <tbody>
      { restRow.map(row=> (<tr key={row[10]}>{ row.map(item => (<td className="td" key={uuidv4()}>{item}</td>)) }</tr>)) }
    </tbody>
    </table>


    )
};

export default DataSheet