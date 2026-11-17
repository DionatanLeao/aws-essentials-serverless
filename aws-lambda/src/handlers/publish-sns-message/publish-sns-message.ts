import { APIGatewayEvent, Context } from "aws-lambda";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);    

    const id = event.pathParameters?.id;

    const client = new SNSClient({ region: "us-east-2" });

    const command = new PublishCommand({
        TopicArn: "arn:aws:sns:us-east-2:114104072033:primeiro-topico",
        Message: JSON.stringify({
            message: "Hello world!",
            nome: "Gustavo",
        })
    });

    await client.send(command);

    return { statusCode: 200 };
};