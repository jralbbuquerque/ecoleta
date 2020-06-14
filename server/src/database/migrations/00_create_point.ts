import Knex from 'knex';

/* Com TypeScript, a partir do momento que definimos o tipo
   da variável (ignorando os tipos primitivos) a IDE permite
  acesso a todos os métodos e recursos da LIB. 
*/
export async function up(knex: Knex){
  // CRIAR A TABELA
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
  });
}

export async function down(knex: Knex){
  // ROLLBACK (DELETAR A TABELA)
  return knex.schema.dropTable('points');
}