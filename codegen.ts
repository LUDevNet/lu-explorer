import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-apollo-angular"],
      config: {
        gqlImport: "app/util/services/graphql#gql",
        apolloAngularPackage: "app/util/services/graphql"
      }
    }
  }
};

export default config;
