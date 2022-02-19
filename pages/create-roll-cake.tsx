import { Box } from "@mui/material";
import { InteractiveRollCake } from "../components/InteractiveRollCake";
import { MenuPageContainer } from "../components/MenuPageContainer";
import { PageContainer } from "../components/PageContainer";

const CreateRollCake = () => (
  <MenuPageContainer title="create your roll cake">
    <Box
      sx={{
        px: 5,
      }}
    >
      <InteractiveRollCake />
    </Box>
  </MenuPageContainer>
);

export default CreateRollCake;
