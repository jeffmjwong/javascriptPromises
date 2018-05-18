navigator.getBattery().then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log('An error occured: ' + error);
})

fetch('https://randdomuser.me/api/').then(function(response) {
  console.log(response)
}).catch(function(error) {
  console.log(`Something went wrong: ${error}`)
})

function readJSON(json) {
  return new Promise(function(resolve, reject) {
    try {
      const data = JSON.parse(json)
      resolve(data)
    }
    catch(error) {
      // Invalid JSON
      reject({ error: true, message: error.message })
    }
  })
}

const x = { "name":"John", "age":"25" }

readJSON(x).then(function(result) {
  console.log(result)
}).catch(function(err) {
  console.log('Promise rejected: ' + err.message)
})
