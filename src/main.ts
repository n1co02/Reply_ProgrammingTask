import {OK} from './constants';
import {startServer} from './server/server';
import {MessageType} from './types';
import log from './utility/log';

const PORT = 4042;

(async function () {
  await startServer(PORT /* add params */);
  log(`server running on port ${PORT} ${OK}`, MessageType.Start);
})();
