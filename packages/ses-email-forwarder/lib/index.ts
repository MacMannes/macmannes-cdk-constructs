import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface SesEmailForwarderProps {
  // Define construct properties here
}

export class SesEmailForwarder extends Construct {

  constructor(scope: Construct, id: string, props: SesEmailForwarderProps = {}) {
    super(scope, id);
    // eslint-disable-next-line no-console
    console.log(props);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'SesEmailForwarderQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
