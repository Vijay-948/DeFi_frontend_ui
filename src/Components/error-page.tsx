// import { useRouteError } from "react-router-dom";

import errImg from "../Assests/error_page.jpg";

const ErrorPage = () => {
  // const error: any = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <img src={errImg} alt="Error" className="w-1/2 max-w-md" />
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}

export default ErrorPage;
