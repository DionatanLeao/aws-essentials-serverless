import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./get-cursos";

const call = async () => {   
    return await handler({
        queryParameters: {
            nome: "Curso Serveless",
        }
    } as unknown as APIGatewayEvent, 
    {} as Context)
};

call().then((result) => console.log(result));