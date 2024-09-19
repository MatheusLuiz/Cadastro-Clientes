document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('cadastrarClienteBtn');
    const span = document.getElementsByClassName('close')[0];
    const modalContainer = document.getElementById('modalContainer');

    // Carregar conteúdo do modal
    fetch('components/modal.html')
        .then(response => response.text())
        .then(data => {
            modalContainer.innerHTML = data;
        });

    btn.onclick = function() {
        modal.style.display = 'block';
    };

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    modalContainer.addEventListener('click', event => {
        if (event.target.id === 'avancarParaEndereco') {
            toggleModalSection('cadastrarClienteSection', 'cadastrarEnderecoSection');
        } else if (event.target.id === 'voltarParaCliente') {
            toggleModalSection('cadastrarEnderecoSection', 'cadastrarClienteSection');
        } else if (event.target.id === 'cancelarCadastro') {
            modal.style.display = 'none';
            resetForms();
        }
    });
});

function toggleModalSection(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    document.getElementById(showId).classList.add('active');
}

function resetForms() {
    document.getElementById('cadastrarClienteForm').reset();
    document.getElementById('cadastrarEnderecoForm').reset();
}
