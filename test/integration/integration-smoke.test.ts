// * These brutally minimal "smoke" tests ensure this software can be invoked
// * and, when it is, exits cleanly. Functionality testing is not the goal here.

import { createDebugLogger } from 'rejoinder';

import { exports as packageExports, name as packageName } from 'rootverse:package.json';

import {
  ensurePackageHasBeenBuilt,
  reconfigureJestGlobalsToSkipTestsInThisFileIfRequested
} from 'testverse:util.ts';

import { toAbsolutePath, toDirname } from '@-xun/fs';

const TEST_IDENTIFIER = `${packageName.split('/').at(-1)!}-smoke`;
const debug = createDebugLogger({ namespace: 'fs' }).extend(TEST_IDENTIFIER);
const nodeVersion = process.env.XPIPE_MATRIX_NODE_VERSION || process.version;

debug(`nodeVersion: "${nodeVersion}" (process.version=${process.version})`);

reconfigureJestGlobalsToSkipTestsInThisFileIfRequested({ it: true, test: true });

beforeAll(async () => {
  await ensurePackageHasBeenBuilt(
    toDirname(toAbsolutePath(require.resolve('rootverse:package.json'))),
    packageName,
    packageExports
  );
});

test.todo('this');
