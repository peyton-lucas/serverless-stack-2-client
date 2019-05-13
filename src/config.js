const dev = {
  STRIPE_KEY: "sk_test_leN0EjR0MVeCxnAhsWQgMvuo00R8pSRQxD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-14lkftfdpfigs"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://aef0cqijh8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_3Trkd2TyP",
    APP_CLIENT_ID: "718h3ftv90emt4fg0itsgia65r",
    IDENTITY_POOL_ID: "us-east-1:595dace7-ccb4-44f4-9f35-c0b9897bec8d"
  }
};

const prod = {
  STRIPE_KEY: "sk_test_leN0EjR0MVeCxnAhsWQgMvuo00R8pSRQxD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-12dmezfrjlslp"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6d9814q6q8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_F63t4VfvI",
    APP_CLIENT_ID: "750vs55bpvqqbm648fi455hm6k",
    IDENTITY_POOL_ID: "us-east-1:da2921c4-7fe2-456a-989c-7c30481a861d"
  }
};

// console.log(process.env.REACT_APP_TEST_VAR);
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
