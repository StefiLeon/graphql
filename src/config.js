import dotenv from 'dotenv';

dotenv.config();

export default {
    mongo: {
        url: process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce'
    },
    session: {
        ADMIN: process.env.ADMIN,
        PASSWORD: process.env.PASSWORD
    },
    jwt: {
        SECRET: process.env.JWT_SECRET
    }
}