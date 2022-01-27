# Get hashlist of a given attribute from complete hashlist

The goal is to get hashlist of a given attribute. An example use case may be the lottery NFTs: Token may have an attribute called "Result" which can be "Win" or "Lose". This program can be helpful to get winner tokens.

Note: Works for Metaplex's NFT metadata standards.

## Installation

All you need is node.js and run the below command.

```bash
npm install
```

## Usage

Put the complete list of hashlist inside `input` folder and name it to `hashlist.json` then open `app.js` in your IDE and edit the variables in line 8 and 9

```javascript
//KEY and VALUE to check on Metadata
const keyToCheck = "body";
const valueToCheck = "Golden";
```

Then execute following command on terminal
```bash
node app.js
```
