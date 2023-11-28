import GoogleLogin from 'react-google-login';

const GoogleLoginButton = () => {
  const clientId = 'YOUR_CLIENT_ID';

  const onSuccess = (response) => {
    // Handle successful login
  };

  const onFailure = (error) => {
    // Handle login error
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>Sign up with Google</button>
      )}
    />
  );
};
