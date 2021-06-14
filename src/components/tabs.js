import axios from "axios"

const Tabs = (topics) => {



  const topicDiv = document.createElement('div')
  const tab1Div = document.createElement('div')
  const tab2Div = document.createElement('div')
  const tab3Div = document.createElement('div')
  const tab4Div = document.createElement('div')
  const tab5Div = document.createElement('div')

  topicDiv.className = 'topics'
  tab1Div.className = 'tab'
  tab2Div.className = 'tab'
  tab3Div.className = 'tab'
  tab4Div.className = 'tab'
  tab5Div.className = 'tab'


  tab1Div.textContent = topics[0]
  tab2Div.textContent = topics[1]
  tab3Div.textContent = topics[2]
  tab4Div.textContent = topics[3]
  tab5Div.textContent = topics[4]


  topicDiv.append(tab1Div)
  topicDiv.append(tab2Div)
  topicDiv.append(tab3Div)
  topicDiv.append(tab4Div)
  topicDiv.append(tab5Div)

  return topicDiv 
}

const tabsAppender = (selector) => {

  selector = document.querySelector('.tabs-container')

  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {

    selector.append(Tabs(res.data.topics))
  })

  .catch(err => {
    console.log(err)
  })
}

export { Tabs, tabsAppender }
