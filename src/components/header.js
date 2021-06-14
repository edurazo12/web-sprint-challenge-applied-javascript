const Header = (title, date, temp) => {

  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleH1 = document.createElement('h1')
  const tempSpan = document.createElement('span')

  headerDiv.className = 'header'
  dateSpan.classNae = 'date'
  tempSpan.className = 'temp'

  dateSpan.textContent = date
  titleH1.textContent = title
  tempSpan.textContent = temp

  headerDiv.append(dateSpan)
  headerDiv.append(titleH1)
  headerDiv.append(tempSpan)

  return headerDiv
}

const headerAppender = (selector) => {

  selector = document.querySelector('.header-container')
   selector.appendChild(Header('esteban-durazo', 'june/13/2021', '20'))
}


export { Header, headerAppender }
