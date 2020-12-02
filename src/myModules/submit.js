function Submit(data, type , adress, action){
    var XHR = new XMLHttpRequest();
console.log(data)
    XHR.addEventListener("load", function(event) {
      action(event.target.responseText);
    });
    
    XHR.addEventListener("error", function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });

    // Configurez la requête
    XHR.open(type, adress, true);
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmI5ODNjZTAzMjU3YzRmOThhNzM3OWMiLCJpYXQiOjE2MDYyMzAxMjYsImV4cCI6MTYwNjMxNjUyNn0.w9lhs3EqmLuheKewmnItyYDyGpBH-YCxoads5Z1NX7c" );

    XHR.send(data);
}

export default Submit;