navigator.getBattery().then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log('An error occured: ' + error);
})

fetch('https://randomuser.me/api/').then(function(response) {
  console.log(response)
}).catch(function(error) {
  console.log(`Something went wrong: ${error}`)
})

function readJSON(json) {
  
}
