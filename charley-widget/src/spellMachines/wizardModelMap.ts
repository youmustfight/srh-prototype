import { TWizardModelsMap } from "@xstate-wizards/spells";

export const wizardModelMap: TWizardModelsMap = {
  User: {
    modelName: "User",
    schema: {},
    // loader: async () => getUser(),
    loader: async (options) => []
  },
};
