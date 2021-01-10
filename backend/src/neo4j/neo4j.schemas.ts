import { SchemaObject } from 'neode';

const NodeSchema: SchemaObject = {
  name: {
    type: 'string',
    primary: true,
  },
  description: 'string',
  title: 'string',
  parent: {
    type: 'relationship',
    relationship: 'IS_PARENT_OF',
    direction: 'in',
    target: 'Node',
    cascade: 'detach',
    required: false,
    eager: true,
  },
};

export default NodeSchema;
