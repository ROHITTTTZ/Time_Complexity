document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('inputForm');
    const tableDiv = document.querySelector('.table');
    const init = document.querySelector('.initialize');
    const condi = document.querySelector('.condition');
    const upda = document.querySelector('.updation');
    const state = document.querySelector('.statement');
    const complex = document.querySelector('.time-complexity');
    let n; // Initialize n variable
    let i = 0; // Initialize i variable

    function addLines() {
        if (i < n) {
            const newLine = document.createElement('div');
            newLine.textContent = 'i = ' + i;
            tableDiv.appendChild(newLine);
            if (i == 0) {
                init.style.backgroundColor = 'yellow';
            }
            setTimeout(function () {
                init.style.backgroundColor = ''; // Set to an empty string to revert to default
                const newLine2 = document.createElement('div');
                newLine2.textContent = i + ' < ' + n + '   ----> true';
                tableDiv.appendChild(newLine2);
                condi.style.backgroundColor = 'yellow';
                setTimeout(function () {
                    condi.style.backgroundColor = ''; // Set to an empty string to revert to default
                    state.style.backgroundColor = 'yellow';
                    if (i === 0) {
                        complex.innerHTML = 'O(1)';
                    } else {
                        complex.innerHTML += ' + O(1)';
                    }
                    setTimeout(function () {
                        state.style.backgroundColor = '';
                        const newLine3 = document.createElement('div');
                        newLine3.textContent = i + '++';
                        i++;
                        tableDiv.appendChild(newLine3);
                        upda.style.backgroundColor = 'yellow';
                        // Call addLines function recursively
                        setTimeout(function () {
                            upda.style.backgroundColor = '';
                            addLines();
                        }, 3000);
                    }, 3000);

                }, 3000);


            }, 3000);
        }
        else {
            // Display total time complexity
            complex.innerHTML = 'Total Time Complexity: O(n)';
        }
    }

    if (submitButton) {
        submitButton.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting (if it's inside a form)
            n = parseInt(document.getElementById('nInput').value); // Get value of n from input field
            tableDiv.innerHTML = "Current Value of i"; // Clear tableDiv content
            addLines(); // Start animation
        });
    } else {
        alert("Not Clicked..");
        return false;
    }
});
