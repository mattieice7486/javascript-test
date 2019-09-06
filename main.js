function createTable() {
	// Sets variable names for table elements
	let body = document.getElementsByTagName('body')[0];
	let tbl = document.createElement('table');
	let tbdy = document.createElement('tbody');
	// for loop to set row count
	for (let row = 0; row < 5; row++) {
		let tr = document.createElement('tr');
		// switch statement to declare row headings
		switch(row) {
			case 1:
				tr.append("1: OFF DUTY")
				break;
			case 2:
				tr.append("2: SLEEPER")
				break;
			case 3:
				tr.append("3: DRIVING")
				break;
			case 4:
				tr.append("4: ON DUTY (NOT DRIVING)")
				break;
			default:
				tr.append('\xa0')
				break;
		}
		// for loop to set column count
		for (let column = 0; column < 24; column++) {
			let td = document.createElement('td');
			let th = document.createElement('th');
			// if statement sets table headings if the row is 0
			if (row==0) {
				// setting the table headings
				switch(column) {
					case 0:
						th.appendChild(document.createTextNode("MID-NIGHT"))
						tr.appendChild(th)
						break;
					case 12:
						th.appendChild(document.createTextNode("NOON"))
						tr.appendChild(th)
						break;
					default:
						if (column < 12) {
							th.appendChild(document.createTextNode(column))
							tr.appendChild(th)
						} else {
							th.appendChild(document.createTextNode(column - 12))
							tr.appendChild(th)
						}
				}
			// else statement sets the table body rows
			} else {
				// setting the quarter hour ticks
				let newTable = document.createElement('table')
				let newtbdy = document.createElement('tbody');
				td.appendChild(newTable)
				newTable.appendChild(newtbdy)
					// making a 3x4 grid to make the ticks align using for loops
					for (let iRow = 0; iRow < 3; iRow++) {

						let tr = document.createElement('tr');

						for (let iColumn = 0; iColumn < 4; iColumn++) {
							let td = document.createElement('td');
							tr.appendChild(td)
							// Using CSS classes to designate tick borders in the table grid
							if ((iRow == 0 && iColumn < 3) || (iRow == 1 && iColumn == 1)) {
								td.classList.add('marked');
							} else {
								td.classList.add('blank')
							}
						}
						newtbdy.appendChild(tr);
					}
				// generates the "default" cells
				td.appendChild(document.createTextNode('\u0020'))
				tr.appendChild(td)
			}
		}
		// generates the table rows
		tbdy.appendChild(tr);
	}
	// generates the table
	tbl.appendChild(tbdy);
	body.appendChild(tbl);
}
// triggers the createTable function on page load
createTable();