import LinkButton from '../Buttons/LinkButton';

const ProtectRoute = () => (
  <div className="content-container mx-0 md:mx-36 lg:mx-48 xl:mx-72 2xl:mx-80 pt-12 min-h-screen flex flex-col items-center justify-center gap-3">
    <h1 className="text-2xl text-white">Please login to view this page</h1>
    <LinkButton authType="login" title="Login" />
  </div>
);

export default ProtectRoute;
