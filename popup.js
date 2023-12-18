// popup.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch declarations from the server
    fetch('http://192.168.1.12:5010/getDeclarations')
      .then(response => response.json())
      .then(declarations => displayDeclarations(declarations))
      .catch(error => console.error('Error fetching declarations:', error));
});

function displayDeclarations(declarations) {
    const declarationsList = document.getElementById('declarations-list');

    declarations.forEach(declaration => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<button>Société: ${declaration.company.name}, Année: ${declaration.annee}, Période: ${declaration.periode}</button>`;
        listItem.addEventListener('click', () => handleDeclarationClick(declaration.id));
        declarationsList.appendChild(listItem);
    });
}

function handleDeclarationClick(declarationId) {
    fetch(http://192.168.1.12:5010/totalPerTaux/${declarationId}`)
    .then(response => response.json())
    .then(result => {
        // Send a message to content.js with the totalPerTaux data
        chrome.runtime.sendMessage({ totalPerTaux: result });
        console.log(result);
        
    })
    .catch(error => console.error(`Error fetching total per Taux for Declaration ID ${declarationId}:`, error));
    
}
