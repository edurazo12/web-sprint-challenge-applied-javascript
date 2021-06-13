import axios from "axios"
const Card = (article) => {
const cardDiv = document.createElement('div')
const headlineDiv = document.createElement('div')
const authorDiv = document.createElement('div')
const containerDiv = document.createElement('div')
const image = document.createElement('div')
const spanTag = document.createElement('span')
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
