import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material/";

const PageTest = () => {
  return (
    <Card variant="outlined" className="bg-red">
      <CardHeader title="Welcome to the administration" />
      <CardContent>Foo</CardContent>
    </Card>
  );
};

export default PageTest;
