import Neode from 'neode';
import BaseModel from '../common/common.model';

export default class Node extends BaseModel {
  public name: string;

  public description: string;

  public parent?: string | {};

  constructor(name: string, description: string, parent: string = '') {
    super();
    this.name = name;
    this.description = description;
    this.parent = parent;
  }

  /**
   * Create or update the object.
   * @returns {Promise} a promise with the result.
   */
  public create_or_update(): Promise<Neode.Node<any>> | undefined {
    const data: Node = { ...this };
    if (this.parent) {
      data.parent = { node: this.parent };
    } else {
      delete data.parent;
    }
    return this.db?.merge(this.constructor.name, data);
  }
}
