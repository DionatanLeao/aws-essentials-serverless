import { APIGatewayEvent, Context } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);    
    const client = new DynamoDBClient({ region: "us-east-2" });
    const dynamo = DynamoDBDocument.from(client)

    const result = await dynamo.get({
        TableName: "cursos",
        Key: {
            id: "2",
        }
    });

    return result.Item;
};