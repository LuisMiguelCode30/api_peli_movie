import pg from "pg";
const { Client } = pg;
const config = {
  user: "movie_bd_3dz8_user",
  password: "rdGKv4g8jnNREsg3mAbZlECDEbaOiuAL",
  host: "dpg-d4d494er433s73dt898g-a.oregon-postgres.render.com",
  database: "movie_bd_3dz8",
  port: 5432,
  ssl: { rejectUnauthorized: false },
};

export async function getConexion() {
  const client = new Client(config);
  try {
    await client.connect();
    console.log("conexion exitosa");
    return client;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function ConsultarProductos(){
    const client = await getConexion();
    try {
        const res = await client.query('SELECT * FROM products');
        await client.end();
        return res.rows;
    } catch (error) {
        console.log(error);
        return [];
    }
}

