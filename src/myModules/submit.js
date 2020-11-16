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
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    XHR.send(data);
}

export default Submit;