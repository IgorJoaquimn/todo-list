import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/tasks', taskRoutes);
export default app;
//# sourceMappingURL=app.js.map