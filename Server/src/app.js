import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'winston';
import connection from 'connection';
import middleware from 'middleware';
import services from 'services';
import appHooks from 'app.hooks';

const context = express(feathers());
const compressFilter = (req, res) => req.path.endsWith('graphiql')
  || req.path.endsWith('playground')
  ? false
  : compress.filter(req, res);

context.configure(configuration());
context.use(cors());
context.use(helmet());
context.use(compress({ filter: compressFilter }));
context.use(express.json());
context.use(express.urlencoded({ extended: true }));
context.use(favicon(path.join(context.get('public'), 'favicon.ico')));
context.use('/', express.static(context.get('public')));
context.configure(express.rest());
context.configure(connection);
context.configure(middleware);
context.configure(services);
context.use(express.notFound());
context.use(express.errorHandler({ logger }));
context.hooks(appHooks);

export default context;
