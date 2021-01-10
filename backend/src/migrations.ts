import { migrateNodes } from './neo4j/neo4j.migrations';

Promise.all(migrateNodes())
  .then(() => process.exit(0))
  .catch((err) => console.error(err));
