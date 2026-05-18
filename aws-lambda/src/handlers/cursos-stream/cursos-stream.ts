import { DynamoDBStreamEvent, Context } from "aws-lambda";

export const handler = async (event: DynamoDBStreamEvent, _: Context) => {
    console.log("New image");
    console.log(event.Records[0].dynamodb.NewImage);    
    console.log("Old image");
    console.log(event.Records[0].dynamodb.OldImage);
}