# VueFontAwesomePro

This project is contain all icons of fontawesome pro verison run with VueJS

## Install

```sh
npm install @ily1606/vue-font-awesome-pro @ily1606/pro-solid-svg-fontawesome @ily1606/pro-regular-svg-fontawesome
```

### Additional

You can install other packages: @ily1606/pro-thin-svg-fontawesome @ily1606/pro-light-svg-fontawesome @ily1606/pro-duotone-svg-fontawesome

```sh
npm install @ily1606/pro-thin-svg-fontawesome @ily1606/pro-light-svg-fontawesome @ily1606/pro-duotone-svg-fontawesome
```

### Usage

```js
import { VueFontAwesome, Config as FaConfig } from "@ily1606/vue-font-awesome-pro";
import { fa0, fa1 } from "@ily1606/pro-solid-svg-fontawesome";
import {
  fa1 as reFa1,
  fa2 as reFa2,
  fa3 as reFa3,
} from "@ily1606/pro-regular-svg-fontawesome";
```

or, You can import all icons in a package with:

```js
import * as fal from "@ily1606/pro-light-svg-fontawesome";
```

And finally, add icons to FaConfig and define component

```js
app.use(FaConfig, {
  fa0,
  fa1,
  reFa1,
  reFa2,
  reFa3,
  falFa1,
  falFa2,
  falFa3,
  fatFa1,
  fatFa2,
  fatFa3,
  fadFa1,
  fadFa2,
  fadFa3,
});
app.component("VueFontAwesome", VueFontAwesome);
app.mount("#app");
```

