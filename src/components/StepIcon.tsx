import { StepIconProps } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function CustomStepIcon(props: StepIconProps) {
  const { active, completed } = props;

  return (
    <div>
      {active ? (
        <RadioButtonUncheckedIcon color="secondary" />
      ) : (
        <CheckCircleIcon color={completed ? "secondary" : "disabled"} />
      )}
    </div>
  );
}

export default CustomStepIcon;
