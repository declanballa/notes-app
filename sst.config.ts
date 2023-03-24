import { SSTConfig } from "sst";

import * as stacks from './stacks/stacks';

export default {
  config(_input) {
    return {
      name: "notes",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(stacks.StorageStack).stack(stacks.ApiStack).stack(stacks.AuthStack);
  },
} satisfies SSTConfig; 