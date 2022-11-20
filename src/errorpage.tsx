import { useRouteError } from "react-router-dom";
import Header from "./header";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className="errorpage">
        <Header/>
      </div>
    );
  }