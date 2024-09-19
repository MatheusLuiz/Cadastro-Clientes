document.addEventListener('DOMContentLoaded', () => {
    const formEndereco = document.getElementById('cadastrarEnderecoForm');

    formEndereco.onsubmit = async function(event) {
        event.preventDefault(); 
        const formDataCliente = new FormData(document.getElementById('cadastrarClienteForm'));
        const dataCliente = {
            nome: formDataCliente.get('nome'),
            email: formDataCliente.get('email'),
            telefone: formDataCliente.get('telefone'),
            sexo: formDataCliente.get('sexo'),
            status: formDataCliente.get('status')
        };

        try {
            const responseCliente = await fetch('/api/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataCliente)
            });

            if (responseCliente.ok) {
                const resultCliente = await responseCliente.json();
                const clienteId = resultCliente.id;

                const formDataEndereco = new FormData(formEndereco);
                const dataEndereco = {
                    cliente_id: clienteId,
                    cep: formDataEndereco.get('cep'),
                    rua: formDataEndereco.get('rua'),
                    bairro: formDataEndereco.get('bairro'),
                    cidade: formDataEndereco.get('cidade'),
                    estado: formDataEndereco.get('estado')
                };

                const responseEndereco = await fetch('/api/enderecos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataEndereco)
                });

                if (responseEndereco.ok) {
                    alert('Cliente cadastrado com sucesso!');
                    document.getElementById('myModal').style.display = 'none';
                    resetForms();
                } else {
                    alert('Erro ao cadastrar endereço.');
                }
            } else {
                alert('Erro ao cadastrar cliente.');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Erro ao cadastrar cliente.');
        }
    };
});
