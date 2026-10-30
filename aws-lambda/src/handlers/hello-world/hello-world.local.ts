import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./hello-world";

const call = async () => {   
    return await handler({ body: "Olá" } as APIGatewayEvent, {} as Context);
};

call().then((result) => console.log(result));