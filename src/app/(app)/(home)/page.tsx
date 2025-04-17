import { getPayload } from "payload";
import React from "react";
import configPromise from "@payload-config";

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
