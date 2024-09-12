import mongoose from 'mongoose';

const DATABASE_TOKEN = process.env.DATABASE_TOKEN;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    
    if (connectionState === 1) {
        console.log('Database is already connected');
        return;
    }

    if (connectionState === 2) {
        console.log('Connecting to database...');
        return;
    }

    try {
        await mongoose.connect(DATABASE_TOKEN!, {
            dbName: '0x',
            bufferCommands: true,
        });
        console.log('Database connected');
    } catch (error : any) {
        console.log('Database connection error', error);
        throw new Error('Database connection error');
    }
}

export default connect;