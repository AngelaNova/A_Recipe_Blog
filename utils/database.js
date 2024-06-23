import {mongoose} from 'mongoose';



let isConnected = false; // track the connection

console.log("MONGODB_URI: ", process.env.MONGODB_URI);


export const connectToDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    logger.error('MongoDB URI not provided');
    throw new Error('MongoDB URI not provided');
  }

  mongoose.set('strictQuery', true);

  if (isConnected) {
    logger.info('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    logger.info('MongoDB connected');
  } catch (error) {
    logger.error('Failed to connect to MongoDB:', error);
    throw error; // Rethrow the error to indicate connection failure
  }
};
