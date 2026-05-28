import { APIGatewayEvent, Context } from "aws-lambda";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);

    const s3Client = new S3Client({ region: "us-east-2" });

    const command = new DeleteObjectCommand({
        Bucket: "cursos-114104072033",
        Key: "logo.png"
    });

    s3Client.send(command);

    return { statusCode: 200 };
};