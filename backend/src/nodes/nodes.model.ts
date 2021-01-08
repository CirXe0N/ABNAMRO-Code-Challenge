import Neode from "neode";
import BaseModel from "../common/common.model";

export class Node extends BaseModel {
    public name: string;
    public description: string;
    public parent?: string | {};

    constructor(name: string, description: string, parent: string = '') {
        super();
        this.name = name;
        this.description = description;
        this.parent = parent;
    }

    public create_or_update(): Promise<Neode.Node<any>> | undefined {
        const data: Node = Object.assign({}, this);
        this.parent ? data.parent = {'node': this.parent} : delete data.parent;
        return this.db?.merge(this.constructor.name, data);
    }
}
