# mautic-tracking
### Tracking tool for Mautic marketing sofware.

This is a JavaScript module for implementing [Mautic](https://www.mautic.org/)  tracking into a website. Can be used client side on React.

## Installation

```bash
npm install --save mautic-tracking
```

## Usage

Initializing Mautic module:

```js
import mautic from 'mautic-tracking';

mautic.initialize('https://my.mautic-installation.com/mtc.js');
```

### Send page views:

```js
mautic.pageView({ custom: 'options' });
```

## API

#### mautic.initialize(mtcPath)
|Value|Type|Required|Notes|
|------|-----|-----|-----|
|mtcPath| `String`| Yes | The path to your `mtc.js` file.|

#### mautic.pageView(options)
|Value|Type|Required|Notes|
|------|-----|-----|-----|
|options| `Object`| No | Object with custom values that you wish to pass to your mautic software on each page view.|

## License
Released under the MIT license

Copyright (c) 2019 Moises Baez