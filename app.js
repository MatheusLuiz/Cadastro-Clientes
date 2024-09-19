const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoute');
const contatoRoutes = require('./routes/contatoRoute'); 
const cargoRoutes = require('./routes/cargoRoute'); 
const usuarioCargoRoutes = require('./routes/usuarioCargoRoute'); 
const produtoRoutes = require('./routes/produtoRoute'); 
const estoqueRoutes = require('./routes/estoqueRoute'); 
const movimentoProdutoRoutes = require('./routes/movimentoProdutoRoute'); 
const vendaRoutes = require('./routes/vendaRoute'); 
const itemVendaRoutes = require('./routes/ItemVendaRoute'); 
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/auth', authRoutes);

app.use('/contatos', contatoRoutes); 
app.use('/cargos', cargoRoutes); 
app.use('/usuarios-cargos', usuarioCargoRoutes); 
app.use('/produtos', produtoRoutes); 
app.use('/estoques', estoqueRoutes); 
app.use('/movimentos-produtos', movimentoProdutoRoutes); 
app.use('/vendas', vendaRoutes); 
app.use('/itens-venda', itemVendaRoutes); 

app.get('/dashboard', authenticateToken, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;
