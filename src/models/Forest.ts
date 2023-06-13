import uuid from 'react-native-uuid';

export interface IForest{
    id:string
    name : string
    sizeHa : number
}

export class Forest implements IForest {
    id:string = uuid.v4().toString();
    name: string = "";
    sizeHa: number = 0;

    constructor( props : IForest ){
        Object.assign(this, props)
    }
}

export class Forests extends Array<IForest> {
    
}