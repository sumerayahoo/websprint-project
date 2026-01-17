let rowCount = 1;

function addRow() {
  rowCount++;

  const tableBody = document.getElementById("table-body");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${rowCount}</td>
    <td><input type="date"></td>
    <td><input type="text" placeholder="Subject"></td>
    <td><input type="text" placeholder="Portion details"></td>
  `;

  tableBody.appendChild(row);
}
