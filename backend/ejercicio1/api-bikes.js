function callApiBikes() {
    let url = "http://api.citybik.es/v2/networks/rowerowe-lodzkie-rl-kutno"
   fetch(url)
    .then(async response => {
        console.log(response)
        let data = await response.json()
       console.log(data)

    }).catch(error => {
      console.log(error)
    })
    console.log('Hello word')
}

function callApiDlloWeb() {
  let url = "http://localhost:3000/home"
  fetch(url).then(async response => {
    console.log(response)
    let data =await response.text()
    console.log(data)
  }).catch(error =>{
    console.log(error)
  })
}
callApiDlloWeb()
//callApiBikes()