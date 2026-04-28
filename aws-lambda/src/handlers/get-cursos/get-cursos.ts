import { APIGatewayEvent, Context } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);    

    const nome = event.queryStringParameters?.id;

    const client = new DynamoDBClient({ region: "us-east-2" });
    const dynamo = DynamoDBDocument.from(client)

    if (nome) {
        const result = await dynamo.query({
                TableName: "cursos",
                IndexName: "nome-index",
                KeyConditionExpression: "nome = :nome",
                ExpressionAttributeValues: {
                    ":nome": nome,
                }
            });

        return result.Items;
    } else {
        const result = await dynamo.scan({
        TableName: "cursos"
        });

        return result.Items;
    } 
};