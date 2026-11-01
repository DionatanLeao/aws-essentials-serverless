import { APIGatewayEvent, Context } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);    

    const curso = JSON.parse(event.body || "{}")
    const id = event.pathParameters?.id;

    const client = new DynamoDBClient({ region: "us-east-2" });
    const dynamo = DynamoDBDocument.from(client)

    await dynamo.put({
        TableName: "cursos",
        Item: { id, ...curso },
    });

    return { statusCode: 204 };
};