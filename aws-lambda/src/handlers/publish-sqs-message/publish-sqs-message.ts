import { APIGatewayEvent, Context } from "aws-lambda";
import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);    

    const id = event.pathParameters?.id;

    const client = new SQSClient({ region: "us-east-2" });

    const command = new SendMessageCommand({
        QueueUrl: "https://sqs.uus-east-2.amazonaws.com/114104072033/primeira-fila",
        MessageBody: JSON.stringify({
            message: "Hello world!",
            nome: "Gustavo",
        }),
        MessageAttributes: {
            atributo: {
                DataType: "String",
                StringValue: "valor",
            },
        },
    });

    await client.send(command);

    return { statusCode: 200 };
};