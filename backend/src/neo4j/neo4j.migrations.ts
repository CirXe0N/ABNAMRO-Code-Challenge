import Neode from 'neode';
import { Node } from '../nodes/nodes.model';
import initialData from './initial_data.json';

// Init variables
const results: Promise<Neode.Node<any>>[] = [];

// Create nodes
for (const item of initialData['data']) {
    const node = new Node(item.name, item.description, item.parent);
    const result = node.create_or_update();
    if (result) results.push(result);
}

Promise.all(results)
    .then(() => process.exit(0))
    .catch((err) => console.error(err));
