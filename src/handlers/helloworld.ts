import {Context} from "aws-lambda";

export const handler = async (event: any, _: Context) => {
    console.log(event);    
    return "Hello World"
};