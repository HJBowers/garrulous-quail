//
// function buildRequest() {
//   let superAwesomeHTTPInformationUltra = document.querySelectorAll('.form *')
//   console.log("superAwesomeHTTPInformationUltra", superAwesomeHTTPInformationUltra);
//   let valueArr = []
//   superAwesomeHTTPInformationUltra.forEach( element => {
//     if(element.tagName === "INPUT" || element.tagName === "textarea"){
//       if(element.tagName)
//       valueArr.push(
//         element.className,
//         element.value
//        )
//      }
//   })
//   console.log('-=-=- ',valueArr)
// }
//
//
// function buildRequest() {
//   let superAwesomeHTTPInformationUltra = document.querySelectorAll('.form *')
//   console.log("superAwesomeHTTPInformationUltra", superAwesomeHTTPInformationUltra);
//   let httpObject = {
//                 queryParams :[],
//                 headers : []
//               }
//   superAwesomeHTTPInformationUltra.forEach( element => {
//     if(element.className === "methodBox"){
//       httpObject.method = element.value
//     }
//     if(element.className === "hostBox"){
//       httpObject.host = element.value
//     }
//     if(element.className === "qkeyBox" || element.className ==='qvalueBox'){
//       httpObject.queryParams.push(element.value)
//     }
//     if(element.className === "hkeyBox" || element.className ==='hvalueBox'){
//       httpObject.headers.push(element.value)
//     }
//     if(element.className === "bodyBox"){
//       httpObject.body = element.value
//     }
//   })
//   console.log('-=-=- ',httpObject)
//   console.log('queryParams ', httpObject.queryParams)
//   console.log('headers ', httpObject.headers)
// }

function valueFor(name) {
  document.querySelector(`[name="${name}"]`).value
}

requestDetails = {
  method: valueFor("method"),
  host: valueFor("host"),
  body: valueFor("body"),
  headers: [
    [
      valueFor("headerKey1"),
      valueFor("headerValue1")
    ],
    [
      valueFor("headerKey2"),
      valueFor("headerValue2")
    ],
    [
      valueFor('headerKey3'),
      valueFor('headerValue3')
    ]
  ],
  queryParameters: [
    [
      valueFor("queryKey4"),
      valueFor("queryValue4")
    ],
    [
      valueFor("queryKey5"),
      valueFor("queryValue5")
    ],
    [
      valueFor("queryKey6"),
      valueFor("queryValue6")
    ]
  ]
}
console.log(requestDetails)

// const requestDetailsToString = (requestDetails) => {
//   `
//   GET /foo/bar?a=1&b=2 HTTP/1.1
//   Host: example.com
//   User-Agent: curl/7.51.0
//   Accept: */*
//   `
//
//   let string =  ''
//   string += requestDetails.method.toUpperCase() + ' '
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


//header


//body
//
// }
