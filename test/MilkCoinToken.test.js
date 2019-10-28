const MilkCoinToken = artifacts.require("MilkCoinToken");

contract('MilkCoinToken', accounts => {
    const _name = 'Milk Coin Token';
    const _symbol = 'MILK';
    const _decimals = 6;

    beforeEach(async () => {
        this.milkCoinToken = await MilkCoinToken.new(_name, _symbol, _decimals);
    })

    describe('token attributes', () => {
        it('has the correct name', async () => {
            const name = await this.milkCoinToken.name();
            assert.equal(name, _name);
        });

        it('has the correct symbol', async () => {
            const symbol = await this.milkCoinToken.symbol();
            assert.equal(symbol, _symbol);
        });

        it('has the correct decimals', async () => {
            const decimals = await this.milkCoinToken.decimals();
            assert.equal(decimals, _decimals);
        });
    });
});