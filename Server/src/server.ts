import app from './app';
import prisma from './Config/db';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

prisma.$connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('DB connection error:', err));