import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import apiDocumentation from '../../api-documentation.json';

import routes from './routes';

import errorHandler from './middlewares/errorHandler';
import corsOptions from './middlewares/cors';

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.use(routes);
app.use(errorHandler);

export default app;
