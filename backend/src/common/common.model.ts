import Neode, {SchemaObject} from "neode";
import neo4j from '../neo4j/neo4j.client';

export default abstract class BaseModel {
    public db?: Neode = neo4j;
    public dbSchema?: SchemaObject;

    protected constructor() {
        if (this.dbSchema) this.registerSchema();
    }

    public static retrieveAll(): Promise<Neode.NodeCollection> {
        return neo4j.model(this.name).all();
    }

    public registerSchema() {
        neo4j.model(this.constructor.name, this.dbSchema);
    }
}
