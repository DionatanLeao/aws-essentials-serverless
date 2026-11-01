import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./post-curso";

const call = async () => {   
    return await handler({
        body: JSON.stringify({
            nome: "Curso criado pelo post",
            descricao: "Curso cruado a partir do body da requisicao"
        }),
    } as unknown as APIGatewayEvent, 
    {} as Context
  ;)
};

call().then((result) => console.log(result));