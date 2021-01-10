import Neode from 'neode';
import NodeSchema from './neo4j.schemas';

export default Neode.fromEnv()
  .with({
    Node: NodeSchema,
  });
