// content.js
console.log("Content script loaded! haha");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.totalPerTaux) {
        const numberInputs = document.querySelectorAll('input[type="number"]');
        numberInputs.forEach(input => {
            input.value = 0;
        });
        console.log(Object.keys(request.totalPerTaux))
        // Loop through the totalPerTaux data and set input values on the external webpage
        Object.keys(request.totalPerTaux).forEach(data => {
          
            const key = data;
            const value = request.totalPerTaux[data];
            console.log(key)
            console.log(value)

            // Find the label with the specified inner HTML content
            const label = Array.from(document.querySelectorAll('label')).find(label => label.innerHTML.trim() === key);

            if (label) {
            // Get the parent <td> element
            const tdElement = label.parentElement.parentElement;


            // Find the first input element within the next <td>
            const inputElement = tdElement.querySelector('input');
                console.log(inputElement)
            if (inputElement) {
                // Now, you can set the value of the first input element or perform any other actions
                inputElement.value = parseFloat(value);
                
            } else {
                console.error('Input element not found.');
            }
            } else {
            console.error('Label not found for the specified key.');
            }


            
        });
    }
    
});
