import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./get-cursos";

const call = async () => {   
    return await handler({} as APIGatewayEvent, {} as Context)
};

call().then((result) => console.log(result));