# AWSCI-Guestbook-4
Testing DevOps via Jenkins and Serverless Technologies

This Application is a simple Guestbook Application that uses AWS to host both the Application (in S3) and the serverless supporting methods using AWS API Gateway and AWS Lambda.
Data is hosted and maintained in Dynamo DB

This repository hosts the Website and Application Code to be deployed using some basic Web Development Tools like NPM and Gulp.

The Website (S3 Bucket) is deployed via AWS Cloudformation.
The AWS API Gateway and underlying AWS Lambda functions are deployed via Cloudformation
The Dynamo DB Table is also Deployed via Cloud Formation.

Step 1: Build and Package Application
    Build Lambda Deployment Package including all dependencies for deployment to S3
Step 2: Run CloudFormation Tools via the Serverless Framework
    Install and all Tools required to run the Serverless Framework Tools
    Install the Lambda Functions and API Gateway
    Install the DynamoDB Table
    Upload the Application to the newly hosted S3 bucket
Step 3: Validate Installation
    Navigate to the newly created Website and successfully read and write tothe Guestbook Application


Using a JenkinsFile to script the process. Make a change to the Master Branch of the GIT Repository and see all assists being deployed to and AWS Region.
