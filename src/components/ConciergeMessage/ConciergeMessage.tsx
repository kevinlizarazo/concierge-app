import { TypeAnimation } from "react-type-animation";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export default function ConciergeMessage(props: any) {
  const { message } = props;

  const sequence = [message, () => {}].flat();

  return (
    <Paper>
      <Box padding={1}>
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          cursor={true}
          speed={75}
          {...props}
        />
      </Box>
    </Paper>
  );
}
