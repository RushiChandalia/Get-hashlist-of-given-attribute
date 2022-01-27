const { Connection } = require("@metaplex/js");
const { Account } = require("@metaplex-foundation/mpl-core");
const { Metadata } = require("@metaplex-foundation/mpl-token-metadata");

const connection = new Connection("mainnet-beta");

module.exports =  async function getMetadata(tokenAddress) {
    const metadataPDA = await Metadata.getPDA(tokenAddress);
    const mintAccInfo = await connection.getAccountInfo(metadataPDA);
  
    //Weird response structure this returns the metadata
    const {
      data: { data: metadata }
    } = Metadata.from(new Account(tokenAddress, mintAccInfo));
  
    return metadata
};