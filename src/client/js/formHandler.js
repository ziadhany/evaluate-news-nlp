function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    if (Client.checkURL(formText)){
    fetch('http://localhost:8080/test?url='+formText)
    .then(response => response.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = JSON.stringify(res)
    })}
    else{
        alert("Please entre a valid url ")
    }
}

export { handleSubmit }
