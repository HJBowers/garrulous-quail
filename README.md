# garrulous-quail
Goal 194: Postalicious - Demystifying HTTP
- Hannah Bowers @hjbowers
- John Hallman @jhallman5
[Link to the Project Page](http://jsdev.learnersguild.org/goals/194-Postalicious-Demystifying_HTTP.html)

**Sandbox Server**
- [ ] Can run the command `npm run sandbox-server` (or `npm run sb`, if you want to save some typing) to start the sandbox web server at port 3000.
- [ ] The sandbox server source code is written using the [Express][express] library.
- [ ] Sending a `GET` request to the path `/` responds with...
  - [ ] a 200 (OK) status code
  - [ ] a plain-text response body with the content `Welcome to Sandbox!`
  - [ ] the `Content-Type` header set to `text/plain`
- [ ] Sending a `GET` request to the path `/search?q=doodads` responds with...
  - [ ] a 200 (OK) status code
  - [ ] a plain-text response body with the content `You searched for: "doodads"` (it doesn't need to actually do any searching, just return the plain text)
  - [ ] the `Content-Type` header set to `text/plain`
- [ ] Sending a `GET` request to the path `/search` responds with...
  - [ ] a 400 (Bad Request) status code
  - [ ] a plain-text response body with the content `You didn't provide a search query term :(`
  - [ ] the `Content-Type` header set to `text/plain`
- [ ] Sending a `POST` request to the path `/things` with a plain text body `flying car` responds with...
  - [ ] a 201 (Created) status code
  - [ ] a plain-text response body with the content `New thing created: "flying car"!` (it doesn't need to actually create anything, just return the plain text)
  - [ ] the `Content-Type` header set to `text/plain`
- [ ] Sending a `GET` request to the path `/somefile` with an `Accept` header of `text/plain` responds with...
  - [ ] a 200 (OK) status code
  - [ ] a plain-text response body with the content `This is a plain text file`
  - [ ] the `Content-Type` header set to `text/plain`
- [ ] Sending a `GET` request to the path `/somefile` with an `Accept` header of `text/html` responds with...
  - [ ] a 200 (OK) status code
  - [ ] an HTML response body with the content `<!DOCTYPE html><html><body>This is an HTML file</body></html>`
  - [ ] the `Content-Type` header set to `text/html`
- [ ] Sending a `GET` request to the path `/myjsondata` with an `Accept` header of `application/json` responds with...
  - [ ] a 200 (OK) status code
  - [ ] an HTML response body with the content `{ "title": "some JSON data" }`
  - [ ] the `Content-Type` header set to `application/json`
- [ ] Sending a `GET` request to the path `/old-page` responds with...
  - [ ] a 301 (Moved Permanently) status code
  - [ ] the `Location` header set to `http://localhost:3000/newpage`
- [ ] Sending a `POST` request to the path `/admin-only` responds with a 403 (Forbidden) status code
- [ ] Sending a `GET` request to the path `/not-a-page` responds with a 404 (Not Found) status code
- [ ] Sending a `GET` request to the path `/server-error` responds with a 500 (Internal Server Error) staus code

**Postalicious**
- [ ] Can run the command `npm run postalicious` (or `npm run pl`, if you want to save some typing) to start the Postalicious app at port 3001.
- [ ] Users can visit the main page of the Postalicious site at `http://localhost:3001`.
- [ ] Main page has three main sections:
  - [ ] Request builder HTML form
  - [ ] Raw HTTP request
  - [ ] Raw HTTP response
- [ ] When a user fills out the HTML form and clicks a "Send" button...
  - [ ] The raw HTTP request is generated and shown
  - [ ] The HTTP request is sent, and the raw response message is shown
- [ ] Users can fill out an HTML form to specify HTTP request details.
- [ ] Submitting the form will send the request according to the specified details.
- [ ] Requests are made from the server, not from the browser (this is to avoid [CORS issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).
- [ ] Using the HTML form, users can specify...
  - [ ] host and path
  - [ ] HTTP verb/method
  - [ ] query parameter keys + values
  - [ ] header keys + values
  - [ ] request body

### Stretch
Use the stretch goals to go deeper into the nuts and bolts of HTTP.

- [ ] Sandbox server is written using _only the core Node.js modules_ (instead of Express, use the built-in [HTTP module][node-http]).
- [ ] Users of Postalicious can "save" their requests in a history panel
- [ ] Clicking on a saved request will re-load it into the form
- [ ] Using Postalicious, create some HTTP requests to various real-world APIs:
  - [ ] Get all issues for a repo through the GitHub API
  - [ ] Get all tweets with the hashtag `#javascript` with the Twitter API
  - [ ] Any other API request(s) of your choice
  - [ ] External HTTP requests are saved in files under a `example-requests/` directory (make sure to obscure any secure information before saving these files, like your password or authentication token)

## Quality Rubric
**Well formatted code**
- Code uses a linter, which can be invoked with a command (e.g. `npm run lint`). [50 points]
- Running the linter on all source code files generates no linting errors. [50 points]

**Clear and useful README**
- Repository includes a README file with installation and setup instructions. [25 points]
- Repository includes a README file with usage instructions and at least one example use case. [25 points]

**Proper dependency management**
- There is a command to install dependencies (e.g. `npm install`) and it is specified in the installation and setup instructions of the README. [50 points]

**Good project management**
- Commit messages are concise and descriptive. [25 points]
- All features are added via pull requests. [25 points]
- Every pull request has a description summarizing the changes made. [25 points]
- Every pull request has been reviewed by at least one other person. [25 points]

## Resources

### Courses, Tutorials, Articles
- Treehouse course on [HTTP Basics][treehouse-http] (67-minute Development Tools Course)
- [Overview of HTTP][ntu-http-overview] from NTU Singapore
- [Tips on HTTP][tutsplus-http] from Tuts+
- [Beginner's Guide to HTTP and REST][tutsplus-http-rest] from Tuts+
- Mozilla Developer Network's [Guide to HTTP][mdn-http]
- 30 min course on the [Basics of HTTP][egghead-http-basics]
- Article on [How the Web Works](https://medium.freecodecamp.com/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c#.3l2bffw28)

### Tools
- [Postman][postman-extension] is a nice GUI for building HTTP requests
- [curl][curl] is a super useful tool for making HTTP requests from the command line


[postman-extension]: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
[express]: http://expressjs.com/
[node-http]: https://nodejs.org/api/http.html

[treehouse-http]: https://teamtreehouse.com/library/http-basics
[ntu-http-overview]: https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
[tutsplus-http]: https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
[tutsplus-http-rest]: https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340
[curl]: https://curl.haxx.se/
[mdn-http]: https://developer.mozilla.org/en-US/docs/Web/HTTP
[egghead-http-basics]: https://egghead.io/courses/understand-the-basics-of-http

[list-mime-types]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
