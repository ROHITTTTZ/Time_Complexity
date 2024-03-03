
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('inputForm');
    if(submitButton){
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the form from submitting (if it's inside a form)
            
        });
    } else {
        alert("Not Clciked..");
        return false;
    }

    const tableDiv = document.querySelector('.table');
    const init = document.querySelector('.initialize');
    const condi = document.querySelector('.condition');
    const upda = document.querySelector('.updation');
    var i = 0; // Start i with 0 initially
    
    while(i!=3){
        addLines();
    }
    function addLines() {
        const newLine = document.createElement('div');
        newLine.textContent = 'i = '+i;
        tableDiv.appendChild(newLine);
        if(i==0){
            init.style.backgroundColor = 'yellow';
        }
        setTimeout(function() {
            init.style.backgroundColor = ''; // Set to an empty string to revert to default
            const newLine2 = document.createElement('div');
            newLine2.textContent = i+' < n   ----> true';
            tableDiv.appendChild(newLine2);
            condi.style.backgroundColor = 'yellow';
            i++;
            setTimeout(function() {
                condi.style.backgroundColor = ''; // Set to an empty string to revert to default
                const newLine3 = document.createElement('div');
                newLine3.textContent = 'i = '+i;
                tableDiv.appendChild(newLine3);
                upda.style.backgroundColor = 'yellow';
                // Call addLines function recursively
                setTimeout(addLines, 3000);
            }, 3000);
        }, 3000);
    }
});