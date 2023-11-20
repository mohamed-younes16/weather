import { Callout } from "@tremor/react";
import React from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

const CalloutCard = ({ mess, war }: { mess: string; war: boolean }) => {
  return (
    <Callout
      icon={war ? ExclamationCircleIcon : CheckCircleIcon}
      title="CHAT GPT Prompt will display right below "
      color={war ? "rose" : "green"}
    >
      {mess}
    </Callout>
  );
};

export default CalloutCard;
