import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

let pool;

export async function conectar() {
    if (pool) {
        return await pool.getConnection();
    } else {
        pool = await mysql.createPool({
            host: '192.168.15.50',
            port: 33306,
            user: 'root',
            password: password,
            database: 'gerenciador_db',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            ebableKeepAlive: true,
            keepAliveInitialDelay: 0
        });
        return await pool.getConnection();
    }
}

export const sequelize = new Sequelize('gerenciador_db', 'root', password, {
    host: '192.168.15.50',
    port: 33306,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
