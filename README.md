# @splitsecond/parse

Parses a datetime string and returns the parsed string or an empty string if it not parsable.

`splitsecond` is a simple date manipulation library for Node. This library always returns ISO 8601 datetime stamps in UTC.

# Installation

```bash
npm i -S @splitsecond/parse
```

or 

```bash
yarn add @splitsecond/parse
```

# Usage

`parse(datetimestamp: string): string`

```javascript
const parse = require('@splitsecond/parse')

parse('03/26/2020 UTC') // '2020-03-26T00:00:00.000Z'
```