import Neode, { SchemaObject } from 'neode';
import neo4j from '../neo4j/neo4j.client';

export default abstract class BaseModel {
  public db?: Neode = neo4j;

  public dbSchema?: SchemaObject;

  protected constructor() {
    if (this.dbSchema) this.registerSchema();
  }

  /**
   * Retrieve all items from a specific model.
   * @returns {Promise} a promise with the result.
   */
  public static retrieveAll(): Promise<Neode.NodeCollection> {
    return neo4j.model(this.name).all();
  }

  /**
   * Register the model schema.
   */
  public registerSchema(): void {
    neo4j.model(this.constructor.name, this.dbSchema);
  }
}
