document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('inputForm'); // Get the submit button element
    const tableDiv = document.querySelector('.content');
    const init = document.querySelector('.initialize');
    const tbody = document.querySelector('.tbody');
    const condi = document.querySelector('.condition');
    const upda = document.querySelector('.updation');
    const state = document.querySelector('.statement');
    const complex = document.querySelector('.time-complexity');
    const time_header = document.querySelector('.time-header');
    const n = 4; // Set n directly to 3
    let i = 0; // Initialize i variable
    function addLines() {
        if(i<n){
        const newRow = document.createElement('tr'); // Create a new table row
        const newCell = document.createElement('td'); // Create a new table cell
        newCell.textContent = 'i = ' + i;
        newRow.appendChild(newCell); // Append the cell to the row
        tbody.appendChild(newRow); // Append the row to the tbody 

        if (i == 0) {
            init.style.backgroundColor = '#474747';
        }


        setTimeout(function () {
            init.style.backgroundColor = ''; // Set to an empty string to revert to default
            const newCell = document.createElement('td'); // Create a new table cell
            newCell.textContent = i + ' < ' + n;
            newRow.appendChild(newCell); // Append the cell to the row
            tbody.appendChild(newRow); // Append the row to the tbody
            const newCell1 = document.createElement('td');
            newCell1.textContent = 'True';
            newRow.appendChild(newCell1); // Append the cell to the row
            tbody.appendChild(newRow); // Append the row to the tbody
            condi.style.backgroundColor = '#474747';
            setTimeout(function () {
                condi.style.backgroundColor = ''; // Set to an empty string to revert to default
                state.style.backgroundColor = '#474747';
                if (i === 0) {
                    complex.innerHTML = '1';
                    time_header.style.visibility = "visible";
                } else {
                    complex.innerHTML += ' + 1';
                }
                setTimeout(function () {
                    state.style.backgroundColor = '';
                    const newCell = document.createElement('td'); // Create a new table cell
                    newCell.textContent = i + '++';
                    newRow.appendChild(newCell); // Append the cell to the row
                    i++;
                    tbody.appendChild(newRow); // Append the row to the tbody
                    const newCell1 = document.createElement('td');
                    newCell1.textContent = '1';
                    newRow.appendChild(newCell1); // Append the cell to the row
                    tbody.appendChild(newRow); // Append the row to the tbody
                    upda.style.backgroundColor = '#474747';
                    setTimeout(function () {
                        upda.style.backgroundColor = '';
                        addLines();
                    }, 2000);
                }, 2000);
            }, 2000);

        }, 2000);


        }else if (i === n) {
            const newRow = document.createElement('tr');
            const newCell = document.createElement('td');
            setTimeout(function () {
                upda.style.backgroundColor = '';
                newCell.textContent = 'i = '+i;
                newRow.appendChild(newCell);
                tbody.appendChild(newRow);
                setTimeout(function () {
                    condi.style.backgroundColor = '#474747';
                    const newCell = document.createElement('td');
                    newCell.textContent = i + ' < '+n;
                    newRow.appendChild(newCell);
                    tbody.appendChild(newRow);
                    setTimeout(function(){
                        const newCell1 = document.createElement('td');
                        newCell1.textContent = 'False';
                        newRow.appendChild(newCell1); // Append the cell to the row
                        tbody.appendChild(newRow); 
                        setTimeout(function(){
                            const newCell2 = document.createElement('td');
                            newCell2.textContent = '-';
                            newRow.appendChild(newCell2); // Append the cell to the row
                            tbody.appendChild(newRow);
                            setTimeout(function(){
                                const newCell3 = document.createElement('td');
                                newCell3.textContent = '0';
                                newRow.appendChild(newCell3); // Append the cell to the row
                                tbody.appendChild(newRow);
                                complex.innerHTML = 'Total Time Complexity: O(n)';
                            },2000); 
                        },2000); 
                    },2000); 
                }, 2000); // Wait for 2 seconds before resetting color
                setTimeout(function () {
                    condi.style.backgroundColor = '';
                }, 2000);
                
            }, 2000);
            
            
        }
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        addLines(); // Call the function to start the animation
    });
});
