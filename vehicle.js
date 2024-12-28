document.getElementById('vehicle-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const model = document.getElementById('vehicle-model').value;
    const license = document.getElementById('license-plate').value;
    const status = document.getElementById('status').value;

    const tableBody = document.getElementById('vehicle-table').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${model}</td>
        <td>${license}</td>
        <td>${status}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById('vehicle-form').reset();
});
