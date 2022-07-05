import { v4 as uuidV4 } from 'uuid';

class Customer {
    id?: string;

    name: string;

    document: number;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Customer };
