import { Router } from "@/general/router.component";
import "./app.css";
import { Suspense } from "react";

function Application() {
  return (
    <>
      <Suspense fallback={<>loading</>}>
        <Router />
      </Suspense>
    </>
  );
}

export default Application;
