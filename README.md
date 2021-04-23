This is a demo repo to understand why calling an API route with `res.redirect(302, {route})` returns a 200 status code to the client.

## To reproduce

- `yarn dev`
- nav to localhost:3000
- click on the "test redirect!" button
- check out the console logs

Is this the indended behavior? Why?
