import { APIGatewayEvent, Context } from "aws-lambda";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const handler = async (event: APIGatewayEvent, _: Context) => {
    console.log(event);

    const s3Client = new S3Client({ region: "us-east-2" });

    const command = new PutObjectCommand({
        Bucket: "cursos-114104072033",
        Key: "logo2.png"
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 30 });

    console.log(url);

    return { statusCode: 200 };
};