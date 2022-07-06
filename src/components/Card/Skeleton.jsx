import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="card"
    speed={2}
    width={265}
    height={520}
    viewBox="0 0 300 484"
    backgroundColor="#CCE6F7"
    foregroundColor="#CCE6F9"
    {...props}
  >
    <rect x="20" y="318" rx="10" ry="10" width="280" height="24" />
    <rect x="20" y="359" rx="10" ry="10" width="280" height="70" />
    <rect x="20" y="15" rx="10" ry="10" width="280" height="286" />
    <rect x="180" y="440" rx="10" ry="10" width="120" height="37" />
    <rect x="20" y="440" rx="10" ry="10" width="120" height="37" />
  </ContentLoader>
);

export default Skeleton;
