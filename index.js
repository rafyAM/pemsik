const modalTambah = document.getElementById('modalTambah');
        const btnTambah = document.getElementById('btn-Tambah');
        btnTambah.addEventListener('click', () => {
            modalTambah.style.display = 'flex';
        })
const modalEdit = document.getElementById('modalEdit');
        function Edit1() {
            modalEdit.style.display = 'flex';
        }

const modalDelete = document.getElementById('modalDelete');
        function Delete() {
                modalDelete.style.display = 'flex';
        }

const modalConfirm = document.getElementById('modalConfirm');
        function confirm() {
                modalConfirm.style.display = 'flex';
                alert('Are you sure you want to delete');
        }
        
window.addEventListener('click', (event) => {
        if (event.target == modalTambah) {
            modalTambah.style.display = 'none';
        }
        if (event.target == modalEdit) {
            modalEdit.style.display = 'none';
        }
    
})

