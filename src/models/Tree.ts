import uuid from 'react-native-uuid';

export interface ITree {
    id:string
    height: number
    circumference: number
    canopyHeight: number
    canopyCircumference: number
    rootsCircumference: number
}

export class Tree implements ITree{
    id:string = uuid.v4().toString();
    height: number = 0;
    circumference: number = 0;
    canopyHeight: number = 0;
    canopyCircumference: number = 0;
    rootsCircumference: number = 0;
}

export class Trees extends Array<ITree>{
}