document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('input[type="submit"][name="submit"]');
    const tableDiv = document.querySelector('.content');
    const init = document.querySelector('.initialize');
    const tbody = document.querySelector('.tbody');
    const condi = document.querySelector('.condition');
    const upda = document.querySelector('.updation');
    const state = document.querySelector('.statement');
    var contentFooter = document.querySelector('.content-footer p');
    const complex = document.querySelector('.time-complexity');
    const time_header = document.querySelector('.time-header');
    const n = 4; // Set n directly to 3
    let i = 0; // Initialize i variable
    function theory1(value){
        if(value==0){
            contentFooter.innerHTML = '`i` is initialized to zero.';
        }
        if(value==1){
            contentFooter.innerHTML = '`i` is initialized to a new value of one.';
        }
        if(value==2){
            contentFooter.innerHTML = '`i` is initialized to a new value of two.';
        }
        if(value==3){
            contentFooter.innerHTML = '`i` is initialized to a new value of three.';
        }

    }

    function addLines() {
        if (i < n) {
            const newRow = document.createElement('tr'); // Create a new table row
            const newCell = document.createElement('td'); // Create a new table cell
            newCell.textContent = 'i = ' + i;
            newRow.appendChild(newCell); // Append the cell to the row
            tbody.appendChild(newRow); // Append the row to the tbody 
            theory1(i);
            if (i == 0) {
                init.style.backgroundColor = '#474747';
            }

            setTimeout(function () {
                init.style.backgroundColor = ''; // Set to an empty string to revert to default
                const newCell = document.createElement('td'); // Create a new table cell
                newCell.textContent = i + ' < ' + n;
                contentFooter.innerHTML = i+' is lesser than '+n+' which is TRUE';
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
                        contentFooter.innerHTML='`i` is incremented and updated with its new value '+i+' .';
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
        } else if (i === n) {
            const newRow = document.createElement('tr');
            const newCell = document.createElement('td');
            setTimeout(function () {
                upda.style.backgroundColor = '';
                newCell.textContent = 'i = ' + i;
                contentFooter.innerHTML = '`i` is initialized to a new value of four.';
                newRow.appendChild(newCell);
                tbody.appendChild(newRow);
                setTimeout(function () {
                    condi.style.backgroundColor = '#474747';
                    const newCell = document.createElement('td');
                    newCell.textContent = i + ' < ' + n;
                    newRow.appendChild(newCell);
                    tbody.appendChild(newRow);
                    contentFooter.innerHTML = i+' is lesser than '+n+' ? ';
                    setTimeout(function () {
                        const newCell1 = document.createElement('td');
                        newCell1.textContent = 'False';
                        contentFooter.innerHTML = i+' is lesser than '+n+' ? which is FALSE';
                        newRow.appendChild(newCell1); // Append the cell to the row
                        tbody.appendChild(newRow);
                        setTimeout(function () {
                            const newCell2 = document.createElement('td');
                            newCell2.textContent = '-';
                            contentFooter.innerHTML = 'The statement is not executed.';
                            newRow.appendChild(newCell2); // Append the cell to the row
                            tbody.appendChild(newRow);
                            setTimeout(function () {
                                const newCell3 = document.createElement('td');
                                newCell3.textContent = '0';
                                newRow.appendChild(newCell3); // Append the cell to the row
                                tbody.appendChild(newRow);
                                complex.innerHTML = 'Total Time Complexity: O(n)';
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000); // Wait for 2 seconds before resetting color
                setTimeout(function () {
                    condi.style.backgroundColor = '';
                }, 2000);
            }, 2000);
        }
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        addLines(); // Call the function to start the animation
    });

    const toggle = document.getElementById("toggleDark");
    const body = document.querySelector('body');
    const algo = document.querySelector('.algorithm');
    const tbl = document.querySelector('.table');
    const tc = document.querySelector('.time-complexity');
    var th = document.querySelector('.time-header');

    toggle.addEventListener('click', function () {
        this.classList.toggle('bi-moon-fill');
        if (this.classList.toggle('bi-brightness-low-fill')) {
            body.style.background = '#333333';
            algo.style.background = '#1E1E1E';
            algo.style.color = '#BB86A1';
            tbl.style.background = '#1E1E1E';
            tbl.style.color = '#BB86A1';
            tc.style.background = '#1E1E1E';
            tc.style.color = 'palegreen';
            th.style.color = 'palegreen';
            submitButton.style.backgroundColor = '#1E1E1E';
            submitButton.style.color = '#BB86A1';

            submitButton.addEventListener('mouseover', function () {
                this.style.backgroundColor = '#474747';
            });

            submitButton.addEventListener('mouseout', function () {
                this.style.backgroundColor = '#1E1E1E';
            });
        } else {
            body.style.background = '#ECF8F3';
            algo.style.background = '#959572';
            algo.style.color = 'green';
            tbl.style.background = '#959572';
            tbl.style.color = 'green';
            tc.style.background = '#959572';
            tc.style.color = 'black';
            th.style.color = 'black';
            submitButton.style.backgroundColor = '#959572';
            submitButton.style.color = 'green';

            submitButton.addEventListener('mouseover', function () {
                this.style.backgroundColor = '#474747';
            });

            submitButton.addEventListener('mouseout', function () {
                this.style.backgroundColor = '#959572';
            });
        }
    });
});
