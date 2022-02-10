import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface SesVerifyIdentitiesProps {
  // Define construct properties here
}

export class SesVerifyIdentities extends Construct {

  constructor(scope: Construct, id: string, props: SesVerifyIdentitiesProps = {}) {
    super(scope, id);

    // eslint-disable-next-line no-console
    console.log(props);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'SesVerifyIdentitiesQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
