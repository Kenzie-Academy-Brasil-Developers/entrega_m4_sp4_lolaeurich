import pkg from "pg";
const {Client} = pkg

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "igor", //o user é igor pq o pc não é meu e achei melhor manter no nome do dono. kkkk
        host: "localhost",
        database: "tests_products",
        password: "1234",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log('database conectada')
};

export default database;
