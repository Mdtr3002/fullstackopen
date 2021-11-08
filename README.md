- Exercise 0.4:

title Submit new notes

note left of browser: User input new notes and click submit
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: status code 302 + URL redirect
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: Page reload + HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note

- Exercise 0.5:

title SINGLE PAGE APP

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note

- Exercise 0.6:

title SPA Submit new notes

note over browser:
When the user submit new notes
(The new content is modified right on the Js file)
end note

note left of browser: Create a new note + Add to the notes list

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note right of server: Receive new data as JSON-string
server-->browser: status code 201 (no page reload) 