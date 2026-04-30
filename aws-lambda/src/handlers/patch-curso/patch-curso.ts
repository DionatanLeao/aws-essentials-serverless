import { APIGatewayEvent, Context } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);    

    const body = JSON.parse(event.body || "{}")

    const client = new DynamoDBClient({ region: "us-east-2" });
    const dynamo = DynamoDBDocument.from(client)

    await dynamo.update({
        TableName: "cursos",
        Key: { id: "3" },
        UpdateExpression: "SET nome = nome",
        ExpressionAttributeValues: {
            ":nome": body.nome,
        },
    });
};