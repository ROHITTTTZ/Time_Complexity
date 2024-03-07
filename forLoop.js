document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('inputForm');
    const tableDiv = document.querySelector('.content');
    const init = document.querySelector('.initialize');
    const condi = document.querySelector('.condition');
    const upda = document.querySelector('.updation');
    const state = document.querySelector('.statement');
    const complex = document.querySelector('.time-complexity');
    const time_header = document.querySelector('.time-header');
    const n = 3; // Set n directly to 3
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
                newLine2.textContent = i + ' < ' + 'n' + '   ----> true';
                tableDiv.appendChild(newLine2);
                condi.style.backgroundColor = 'yellow';
                setTimeout(function () {
                    condi.style.backgroundColor = ''; // Set to an empty string to revert to default
                    state.style.backgroundColor = 'yellow';
                    if (i === 0) {
                        complex.innerHTML = '1';
                        time_header.style.visibility = "visible";
                    } else {
                        complex.innerHTML += ' + 1';
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
                        }, 2000);
                    }, 2000);

                }, 2000);


            }, 2000);
        } else if (i === n) {
            tableDiv.innerHTML += "<div>.<br>.<br>.<br></div>";
            complex.innerHTML+= ' + . . .';
            i++;
            setTimeout(addLines, 1000); // continue with the next iteration after 1 second
        } else if (i === n + 1) {
            const newLine = document.createElement('div');
            newLine.textContent = 'i = ' + '(n - 1)';
            tableDiv.appendChild(newLine);
            
            setTimeout(function () {
                const newLine2 = document.createElement('div');
                newLine2.textContent = '(n - 1)' + ' < ' + 'n' + '   ----> true';
                tableDiv.appendChild(newLine2);
                condi.style.backgroundColor = 'yellow';
                setTimeout(function () {
                    condi.style.backgroundColor = '';
                    state.style.backgroundColor = 'yellow';
                    complex.innerHTML += ' + n'
                    setTimeout(function () {// Reset condition block color
                        state.style.backgroundColor = ''; 
                        const newLine3 = document.createElement('div');
                        newLine3.textContent = '(n - 1)' + '++';
                       
                        i++;
                        upda.style.backgroundColor = 'yellow';
                        tableDiv.appendChild(newLine3);
                                                    // Reset statement block color
                        setTimeout(addLines, 1000); // continue with the next iteration after 1 second
                    }, 2000); // Wait for 2 seconds before resetting color
                }, 2000); // Wait for 2 seconds before adding "(n - 1)++"
            }, 2000); // Wait for 2 seconds before adding "(n - 1) < n"
        } else if (i === n + 2) {
            const newLine = document.createElement('div');
            setTimeout(function () {
                upda.style.backgroundColor = '';
                newLine.textContent = 'i = ' + 'n';
                tableDiv.appendChild(newLine);
                setTimeout(function () {
                    condi.style.backgroundColor = 'yellow';
                    const newLine2 = document.createElement('div');
                    tableDiv.appendChild(newLine2);
                    newLine2.textContent = 'n' + ' < ' + 'n' + '   ----> false';
                    complex.innerHTML = 'Total Time Complexity: O(n)';
                }, 2000); // Wait for 2 seconds before resetting color
                setTimeout(function () {
                    condi.style.backgroundColor = '';
                }, 2000);
                
            }, 2000);
            

            

            
        }
    }

    if (submitButton) {
        submitButton.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting (if it's inside a form)
            tableDiv.innerHTML = '<br>'; // Clear tableDiv content
            addLines(); // Start animation
        });
    } else {
        alert("Button not found..");
        return false;
    }
});
