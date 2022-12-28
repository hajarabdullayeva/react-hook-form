import { Button } from "../../components/Button";
import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Button>Click me</Button>
      <Button as="a" href="/login" buttonColor="black">
        Click me to go to Login page
      </Button>
    </>
  );
};

export default Home;