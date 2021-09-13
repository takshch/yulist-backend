import http from 'http';
import config from 'config';
import app from './app';

/**
 * Get port from environment and store it in express
 */
const port = config.get('port');
app.set('port', port);

/**
 * Create HTTP Server
 */
const server = http.createServer(app);

/**
 * Listen on the provided port, all network interfaces
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log(`Express API running on port:${port} with environment:${process.env.NODE_ENV}`);
}
