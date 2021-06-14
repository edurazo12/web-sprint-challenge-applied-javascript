import axios from "axios"
const Card = (article) => {

  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const containerDiv = document.createElement('div')
  const image = document.createElement('img')
  const spanTag = document.createElement('span')

  cardDiv.classname = 'card'
  headlineDiv.classname = 'headline'
  authorDiv.className = 'author'
  containerDiv.className = 'img-container'

  headlineDiv.textContent = article.headline
  image.setAtrribute('src', article.authorPhoto)
  spanTag.textContent = article.authorName

  cardDiv.append(headlineDiv)
  cardDiv.append(authorDiv)
  authorDiv.append(containerDiv)
  containerDiv.append(image)
  authorDiv.append(spanTag)

  cardDiv.addEventListener('click', () => {
    console.log(headlineDiv.textContent)
  })

  return cardDiv

}

const cardAppender = (selector) => {

  selector = document.querySelector('.cards-container')


  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const articles = res.data.articles;
    const bootstrap = articles.bootstrap
    const javascript = articles.javascript
    const jquery = articles.jquery
    const node = articles.node
    const technology = articles.technology

      selector.append(Card(bootstrap[0]))
      selector.append(Card(bootstrap[1]))
      selector.append(Card(bootstrap[2]))
      selector.append(Card(javascript[0]))
      selector.append(Card(javascript[1]))
      selector.append(Card(javascript[2]))
      selector.append(Card(javascript[3]))
      selector.append(Card(jquery[0]))
      selector.append(Card(jquery[1]))
      selector.append(Card(jquery[2]))
      selector.append(Card(node[0]))
      selector.append(Card(node[1]))
      selector.append(Card(technology[0]))
      selector.append(Card(technology[1]))
      selector.append(Card(technology[2]))
  })
  .catch(err => {
    console.log(err)
  })
}

export { Card, cardAppender }
