const AWS = require('aws-sdk');
const zlib = require('zlib');
const s3 = new AWS.S3();

exports.lambdaHandler = async (event, context) => {
    const gzip = zlib.createGzip();
    
    const bucket = event.Bucket;
    const key = event.Key;

    const destinationBucket = event.Destination ? event.Destination.Bucket : bucket;
    const destinationKey = event.Destination ? event.Destination.Key : key + '.zip';

    const stream = s3.getObject({Bucket:bucket , Key:key})
    .createReadStream()
    .pipe(gzip)

    const managedUpload = s3.upload({Bucket: destinationBucket, Key: destinationKey, Body: stream});
    return managedUpload.promise();
};