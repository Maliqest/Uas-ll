document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transaction-form');
    const transaksiTable = document.getElementById('transaksi-table');

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    if (transaksiTable) {
        const tbody = transaksiTable.querySelector('tbody');
        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.nama}</td>
                <td>${transaction.jumlah}</td>
                <td>${transaction.kategori}</td>
            `;
            tbody.appendChild(row);
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama-transaksi').value;
            const jumlah = document.getElementById('jumlah').value;
            const kategori = document.getElementById('kategori').value;

            const newTransaction = { nama, jumlah, kategori };
            transactions.push(newTransaction);
            localStorage.setItem('transactions', JSON.stringify(transactions));

            alert('Transaksi berhasil disimpan!');
            form.reset();
        });
    }
});
