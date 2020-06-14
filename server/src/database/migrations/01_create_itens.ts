import Knex from 'knex';

/* Com TypeScript, a partir do momento que definimos o tipo
   da variável (ignorando os tipos primitivos) a IDE permite
  acesso a todos os métodos e recursos da LIB. 
*/
export async function up(knex: Knex){
  // CRIAR A TABELA
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex){
  // ROLLBACK (DELETAR A TABELA)
  return knex.schema.dropTable('items');
}