# lambda-s3-zip

Lambda function that compressess a given S3 file and saves the output back to S3.

It uses streams to download, compress and upload files, allowing it to process files larger than the lambda memory limit.

## Installation Instructions

1. [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and login
1. Go to the app's page on the [Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications) and click "Deploy"

### App Outputs

1. `lambdaS3Zip` - Lambda Function Name.
1. `lambdaS3ZipArn` - Lambda Function ARN.

## Usage

Input event:
```json
{
    "Bucket":STRING_VALUE, /* required */
    "Key":STRING_VALUE,    /* required */
    "Destination":{
        "Bucket":STRING_VALUE,
        "Key":STRING_VALUE
    }
}
```

If `Destination` is not present, the zipped file will be saved to:

`s3://{Bucket}/{Key}.zip`

## License Summary

This code is made available under the MIT license. See the LICENSE file.