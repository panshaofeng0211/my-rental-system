document.getElementById('rental-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const car = document.getElementById('car').value;
    const renter = document.getElementById('renter').value;
    const date = document.getElementById('date').value;
    const duration = parseInt(document.getElementById('duration').value);
    const price = parseFloat(document.getElementById('price').value);
    const total = (duration * price).toFixed(2);

    const tableBody = document.getElementById('rental-table').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${car}</td>
        <td>${renter}</td>
        <td>${date}</td>
        <td>${duration}</td>
        <td>${price}</td>
        <td>${total}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById('rental-form').reset();
});
