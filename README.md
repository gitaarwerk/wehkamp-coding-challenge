## Wehkamp assignment
Nice assignment to do, but takes a lot of time.

Starting it:
`yarn start` or `npm start`


Normally there are a lot of things I would do different. 

- Some components have mixed business logic and data management, which I would put in a container, so the component remains cleaner and easier to test.
- I would add way more unit tests and snapshot tests, now I only put one for the helper function to map the saving of a review. It was the most important one.
- I would use local state a little less (i.e. opening the review window would be in global state instead).
- HTML5 markup can be a little more improved by using aria properties and titles.
- Form field validation should be added.
- And..well, there;s always more and more to be made better :-) 