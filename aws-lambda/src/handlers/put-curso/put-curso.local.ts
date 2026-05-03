import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "./put-curso";

const call = async () => {   
    return await handler({
        pathParameters: {
            id: "55e1d535-ad27-46fa-ac63-27f445c9e345",
        },
        body: JSON.stringify({
            nome: "Curso criado pelo post",
            descricao: "Curso cruado a partir do body da requisicao"
        }),
    } as unknown as APIGatewayEvent, 
    {} as Context
  );
};

call().then((result) => console.log(result));