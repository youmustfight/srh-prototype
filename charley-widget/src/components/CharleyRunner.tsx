import { WizardRunner } from "@xstate-wizards/wizards-of-react";
import React from "react";
import { WizardWrapFrame } from "@xstate-wizards/wizards-of-react";
import { spellMap } from "../spellMachines/spellMap";
import { ID_SPELL_CHARLEY } from "../spellMachines/spellCharley";
import { wizardSerializations } from "../spellMachines/wizardSerializations";
import { wizardModelMap } from "../spellMachines/wizardModelMap";

type TScreenerProps = {
  onClose: () => void;
};

export const CharleyRunner: React.FC<TScreenerProps> = ({ onClose }) => {
  return (
    <WizardRunner
      debugConfig={{
        logging: true,
        skipSaves: true,
      }}
      spellKey={ID_SPELL_CHARLEY}
      spellMap={spellMap}
      models={wizardModelMap}
      serializations={{
        ...wizardSerializations,
        components: {
          ...wizardSerializations.components,
          WizardWrap: WizardWrapFrame,
        },
      }}
      navigate={() => null}
      sessionEnabled={false}
      onWizardFinal={({ machine }) => {
        console.log(machine);
        if (machine.value !== "cancel") {
          // TODO
        } else {
          // TODO
        }
      }}
    />
  );
};
