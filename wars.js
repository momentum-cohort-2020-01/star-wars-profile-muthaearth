
/*globals fetch*/

let swapiData
const dataSection = document.querySelector('#swapi-data')

//fetch returns JS promise in response to 
//StarWars API Vehicles access request
fetch('https://swapi.co/api/vehicles')

//json method called to transform requested data
.then(response => response.json())

//then function chained to access the requested data
.then(((data) => {
  swapiData = data
  renderH2()

  //url of repo returned
  return data.repos_url
})

//chain a fetch of the url to return the value
.then(url => fetch(url))

//this function is chained to ensure data received as promised
.then(response => response.json())

//this function is chained to use the data; the console.log it
.then(function(data) {
  console.log(data)

//this step creates an unordered list of DOM
const repoList = document.createElement('ul')
dataSection.appendChild(repoList)

//these are Tachyons classes
repoList.classList.add(
  'list',
  'pl0',
  'ml0',
  'center',
  'mw6',
  'ba',
  'b--light-silver',
  'br3'
)

//this loops through list of repos in the json data
for (const repo of data) {
  
  //for each one, create a new li element
  const listItem = document.createElement('li')
  listItem.innerText = repo.name
  listItem.classList.add('ph3', 'pv2', 'bb', 'b--light-silver')
  repoList.appendChild(listItem)
}
})
//this function creates and inserts an h2 element
function renderH2() {
  const h2El = document.createElement('h2')
  h2El.innerText = swapiData.name
  dataSection.appendChild(h2El)
})


