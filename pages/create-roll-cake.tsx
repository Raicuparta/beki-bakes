import { Box, Typography } from "@mui/material";
import { InteractiveRollCake } from "../components/InteractiveRollCake";
import { MenuPageContainer } from "../components/MenuPageContainer";

const CreateRollCake = () => (
  <MenuPageContainer title="create your roll cake">
    <InteractiveRollCake />
  </MenuPageContainer>
);

export default CreateRollCake;
