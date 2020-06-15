import express from 'express';
import cros from 'cors';
import routes from './routes';
import path from 'path';

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema 

// GET: Busca uma ou mais informações do back-end
// POST: Cria uma nova informação no back-end
// PUT: Atualiza uma informação existente no back-end
// DELETE: Remove uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar usuário com o ID 5

// Request Parm: Parâmetros que vem na própria rota que identificam um recurso
// Query Parms: Parâmetros que vem na propria rota geralmente para filtros, paginação

const app = express();

app.use(cros());

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);