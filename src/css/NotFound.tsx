import '../css/404.css';

const NotFound = () => {
  return (
    <div className="container">
      <div className="error-code">404</div>
      <h1 className="title">Page Not Found</h1>
      <p className="message">The page you are looking for doesn't exist or has been moved.</p>
      <div className="loading"></div>
    </div>
  );
};

export default NotFound;