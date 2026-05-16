import { APIGatewayEvent, Context } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);
    
    const curso = JSON.parse(event.body || "{}")

    const client = new DynamoDBClient({ region: "us-east-2" });
    const dynamo = DynamoDBDocument.from(client)

    await dynamo.put({
        TableName: "cursos",
        Item: { ...curso, id: randomUUID() } ,
    });

    return { statusCode: 204 };
};