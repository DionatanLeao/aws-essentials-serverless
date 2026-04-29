import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./patch-curso";

const call = async () => {   
    return await handler({
        body: JSON.stringify({
            nome: "Curso atualizado dinamicamente",
        })
    } as APIGatewayEvent, {} as Context)
};

call().then((result) => console.log(result));