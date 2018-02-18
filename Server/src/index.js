import context from './app';

const port = context.get('port');
const server = context.listen(port);

process.on('unhandledRejection', (reason, p) =>
  console.error(`error: Unhandled Rejection at: Promise ${p} ${reason}`));

server.on('listening', () =>
  console.info(`Feathers application started on http://${context.get('host')}:${port}`));
