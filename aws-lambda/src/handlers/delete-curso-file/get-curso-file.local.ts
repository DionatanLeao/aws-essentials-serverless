import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./get-curso-file";

const call = async () => {   
    return await handler({
        pathParameters: {
            id: "1",
        },
    } as unknown as APIGatewayEvent, 
    {} as Context)
};

call().then((result) => console.log(result));