const awsmobile = {
    "aws_project_region": "YOUR_AWS_REGION",
    "aws_cognito_identity_pool_id": "YOUR_COGNITO_IDENTITY_POOL_ID",
    "aws_cognito_region": "YOUR_COGNITO_REGION",
    "aws_user_pools_id": "YOUR_USER_POOLS_ID",
    "aws_user_pools_web_client_id": "YOUR_USER_POOLS_WEB_CLIENT_ID",
    "oauth": {
        "domain": "YOUR_COGNITO_DOMAIN",
        "scope": ["openid", "profile", "email"], // Ensure these scopes include profile information
        "redirectSignIn": "YOUR_REDIRECT_SIGN_IN_URL",
        "redirectSignOut": "YOUR_REDIRECT_SIGN_OUT_URL",
        "responseType": "code", // or "token" depending on your OAuth flow
        "googleClientId": "YOUR_GOOGLE_CLIENT_ID"
    },
    // Other configurations...
};

export default awsmobile;
