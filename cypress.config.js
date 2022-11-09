const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video: true,
  e2e: {
    "demohost_url": "https://demoqa.ohmyfi.com/demo/iniciodemo?token=b152dae0f7474a61237add342afba5f0d06&lugar=4089",
    "num_Phone": "35648978",
    "Token_test": "12345",
    "Name_User": "BootUserTest",
    "projectId": "gwkjzq",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "projectId": "gwkjzq"
});
