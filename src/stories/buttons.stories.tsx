import { storiesOf } from "@storybook/react";
import React from "react";

import { Box, Button } from "grommet";

const BasicButton: React.FunctionComponent = () => {
  return (
    <Box>
      <Button label="Basic" />
    </Box>
  )
}

storiesOf("Buttons", module).add("Basic Button", () => (<BasicButton />));