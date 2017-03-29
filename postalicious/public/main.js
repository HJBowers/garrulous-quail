document.querySelectorAll( )

function buildRequest() {
  let superAwesomeHTTPInformationUltra = document.querySelectorAll('.form *')
  console.log("superAwesomeHTTPInformationUltra", superAwesomeHTTPInformationUltra);
  let valueArr = []
  superAwesomeHTTPInformationUltra.forEach( element => {
    if(element.tagName === INPUT || element.tagName === TEXTAREA) {
      valueArr.push({
        element.name,
        element.value
       })
    }
  })
}



// HTTP object = {
//   method : Value,
//   RequestURL : value,
//   queryparameters : [
//                       [key1, key2, key3],
//                       [value1, value2, value3]
//                     ],
//   queryparameters : {
//                     key1 : value1,
//                     key2 : value2,
//                     key3 : value3
//                   },
//   Headers : {
//                     key1 : value1,
//                     key2 : value2,
//                     key3 : value3
//                   },
//   body: someString
// }


// //queryParameters
//   const queryKeys = document.getElementsByClassName('qKeyBox')
//   const queryValues = document.getElementsByClassName('qValueBox')
//
// //queryParameters
//   const queryKeys = document.getElementsByClassName('qKeyBox')
//   const queryValues = document.getElementsByClassName('qValueBox')
//
// }


//step 1
  // create a json object with form informatiion
//step 2
  //log the json object to the console
//step 3
  //display json object in the request box
//step 4
  //send json object to the sandbox server in the body of an http request
//step5
  //use a http library to make an http from the body of the http request
//step 6
  //get the response and send that back to the pl server
// step 7
  //display http body as an http request in the response box
