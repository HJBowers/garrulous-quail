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

const requestDetailsToString = (requestDetails) => {
  let startOfPath = requestDetails.host.indexOf( '/', 9 )
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

document.querySelector('.requestButton').addEventListener('click', formSubmission)
