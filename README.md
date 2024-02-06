# My site

* This website is in progress *

To build, have pnpm installed and run

```sh
rm -rf ./build/ # only run if you have built the site before
pnpm install
pnpm build
```

The site will be in the build. Run `node build` to run the site on `0.0.0.0` with port `3000`.
To change this you can add an env file more info [here](https://kit.svelte.dev/docs/adapter-node)
