import Neode from 'neode';
import Node from '../nodes/nodes.model';
import initialData from './initial_data.json';

/**
 * Create `Node` records in the Neo4J database.
 * @returns {Promise} promise with the results.
 */
export function migrateNodes() {
  const results: Promise<Neode.Node<any>>[] = [];

  initialData.data.forEach((item) => {
    const node = new Node(item.name, item.description, item.parent);
    const result = node.create_or_update();
    if (result) results.push(result);
  });

  return results;
}
