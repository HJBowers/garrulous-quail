
function buildRequest() {
  let superAwesomeHTTPInformationUltra = document.querySelectorAll('.form *')
  console.log("superAwesomeHTTPInformationUltra", superAwesomeHTTPInformationUltra);
  let valueArr = []
  superAwesomeHTTPInformationUltra.forEach( element => {
    if(element.tagName === "INPUT" || element.tagName === "textarea"){
      if(element.tagName)
      valueArr.push(
        element.className,
        element.value
       )
     }
  })
  console.log('-=-=- ',valueArr)
}


function buildRequest() {
  let superAwesomeHTTPInformationUltra = document.querySelectorAll('.form *')
  console.log("superAwesomeHTTPInformationUltra", superAwesomeHTTPInformationUltra);
  let httpObject = {
                queryParams :[],
                headers : []
              }
  superAwesomeHTTPInformationUltra.forEach( element => {
    if(element.className === "methodBox"){
      httpObject.method = element.value
    }
    if(element.className === "hostBox"){
      httpObject.host = element.value
    }
    if(element.className === "qkeyBox" || element.className ==='qvalueBox'){
      httpObject.queryParams.push(element.value)
    }
    if(element.className === "hkeyBox" || element.className ==='hvalueBox'){
      httpObject.headers.push(element.value)
    }
    if(element.tagName === "textarea"){
      httpObject.body = element.value
    }
  })
  console.log('-=-=- ',httpObject)
  console.log('queryParams ', httpObject.queryParams)
  console.log('headers ', httpObject.headers)
}



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


//header


//body
//
// }
