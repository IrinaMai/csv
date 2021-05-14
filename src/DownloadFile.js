import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'
// import  *as Papa  from 'papaparse';
import  DataSheet from "./DataSheet";

const buttonRef = React.createRef()


class CSVReaderMy extends Component {
 state= null;


  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  handleOnFileLoad = (data) => {
  this.setState([...data])
}

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }


  render() {
    return (
      <>
        <h5>Basic Upload</h5>
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          {({ file }) => (
            <aside
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10
              }}
            >
              <button
                type='button'
                onClick={this.handleOpenDialog}
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  width: '40%',
                  paddingLeft: 0,
                  paddingRight: 0
                }}
              >
                Browe file
              </button>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  height: 45,
                  lineHeight: 2.5,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: '60%'
                }}
              >
                {file && file.name}
              </div>
            </aside>
          )}
        </CSVReader>
        {this.state && <DataSheet csvData = {this.state}/>  }
       
      </>
    )
  }
}

export default CSVReaderMy;