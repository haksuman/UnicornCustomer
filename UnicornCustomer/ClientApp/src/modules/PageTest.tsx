import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material/";

const PageTest = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Welcome to the administration" className="bg-red-500" />
      <CardContent>Foo</CardContent>
    </Card>
  );
};

export default PageTest;
