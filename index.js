const ganache = require("ganache-core");
const option = {
    total_accounts: 1,
    mnemonic: "galaxy urge mixture color neglect scrap path belt baby dignity dune tired wrong carry high",
    default_balance_ether: 1000000000,
    blockTime: 10,
}
const server = ganache.server(option);
const provider = server.provider;
const port = 3000
server.listen(port, function(err, blockchain) {
    console.log('server Listing on port 3000')
});