import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import dynamic from "next/dynamic";

const Judul = dynamic(() => import("app2/Title"), {
  ssr: false,
  loading: () => <div>Loading Woi . . .</div>
});


const Title = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
    
      
      <Judul title="Microfrontend Testing dicoba" />
      
    
    </ErrorBoundary>
  );
};

export default Title;
