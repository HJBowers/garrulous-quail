function valueFor(name) {
  const node = document.querySelector(`[name="${name}"]`)
  return node ? node.value : undefined
}

function getRequestDetails () {
   return {
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
}

// MAIN -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- MAIN
function formSubmission(event) {
  const requestDetails = getRequestDetails()
  console.log('requestDetails ', requestDetails)
  console.log('headers ', requestDetails.headers[0])
  console.log('query ', requestDetails.queryParameters)
  appendRequest(requestDetails)
  doRequest(requestDetails)
}


function appendRequest(requestDetails) {
  let node = document.createElement('pre')
  node.innerText = requestDetailsToString(requestDetails)
  document.querySelector('.HTTPRequestBody').appendChild(node)
}

function doRequest(requestDetails){
  console.info('doing request', requestDetails)
  console.info('doing request', JSON.stringify(requestDetails))
  // send the http request details to the server
  // via a transport http request
  fetch('/dorequest', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestDetails),
  })
  // .then(response => response.body() )
  .then(transportResponse => {
    if (transportResponse.ok) return transportResponse.json()
    console.error('failed to do request', response)
  })
  .then(requestResponse => {
    if (requestResponse.requestFailed){
      console.log(requestResponse)
      document.querySelector('.HTTPResponseBody').innerText = ''+
        'TOTAL FAILURE!!!!\n'+
        JSON.stringify(requestResponse, null, 2)
    }else{
      console.log('resonse body', requestResponse)

      document.querySelector('.HTTPResponseBody').innerText =
          JSON.stringify(requestResponse, null, 2)
    }
  })
}

// REQUEST SHOULD LOOK LIKE EXAMPLE BELOW:
// `
// GET /foo/bar?a=1&b=2 HTTP/1.1
// Host: example.com
// User-Agent: curl/7.51.0
// Accept: */*
// `
const requestDetailsToString = (requestDetails) => {
  let startOfPath = requestDetails.host.indexOf('3001/') + 4
  let path = requestDetails.host.slice(startOfPath)
  let string =  ''
  string += requestDetails.method.toUpperCase() + ' '
  string += path + ' '
  string += 'HTTP/1.1 ' + '\n'
  string += 'HOST: ' + requestDetails.host.slice(0, startOfPath) + '\n'
  string += 'User-Agent: ' + 'Postalicious' + '\n'
  string += 'Accept: */* '
  return string
}

function responseMessage() {
  const requestDetails = getRequestDetails()
  fetch('localhost:3001/responseMessage', {
    method: 'POST',
    headers: {
      'Accept': 'text/plain'
    },
    body: JSON.stringify(requestDetails)
  })
  .then(response => response.json())
  //RENDER RESPONSE HERE with helper function
}

// REPSONSE SHOULD LOOK LIKE EXAMPLE BELOW:
/*
HTTP/1.1 200 OK
Date: Sun, 18 Oct 2009 08:56:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Sat, 20 Nov 2004 07:16:26 GMT
ETag: "10000000565a5-2c-3e94b66c2e680"
Accept-Ranges: bytes
Content-Length: 44
Connection: close
Content-Type: text/html
X-Pad: avoid browser bug

<html><body><h1>It works!</h1></body></html>
*/
function renderResponse(domValues) {
  let responseDiv = document.querySelector('.HTTPResponseBody')
  if('error' in domValues) {
    console.log("renderResponse ERROR");
  } else {
    let
  }
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


document.querySelector('.requestButton').addEventListener('click', formSubmission)
