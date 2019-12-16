# An example of GraphQl -> Apollo -> React Typing

## Get Started

Clone the repo...

Install node modules for the graph side: `cd graph && yarn`
Install node modules for the app side: `cd native && yarn`

## Generating types

Out of the box this does come with the generated types, but if you want to change them:

In one window run the graph: `cd graph && yarn start`

and in a second run the schema generate: `cd native && yarn generate-schema` (this downloads the most recent graph schema)

In the second window (native folder), then run the query generator: `yarn generate-query-types` which will create/update the types for the queries you have

## To Run

Just the graph (in window 1): `cd graph && yarn start` - will run on PORT :3001

Just the app (in window 2): `cd native && yarn start`

This runs the app via expo, you'll need to launch the app in a simulator (you may need expo installed)
NB: You don't need to run the app, you only need to run the graph as we only care about the code

## Validating

Both the graph folder, and the native folder support the `yarn lint` command that will validate everything that is required
