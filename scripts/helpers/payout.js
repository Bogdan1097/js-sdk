const StellarSdk = require('../../lib/index');

function performPayout(testHelper, source, asset, sourceBalanceId,
                       maxPayoutAmount, minPayoutAmount = "0",
                       minAssetHolderAmount = "0", fixed = "0", percent = "0") {
    const opts = {
        asset: asset,
        sourceBalanceId: sourceBalanceId,
        maxPayoutAmount: maxPayoutAmount,
        minPayoutAmount: minPayoutAmount,
        minAssetHolderAmount: minAssetHolderAmount,
        fee: {
            fixed: fixed,
            percent: percent
        },
    };
    const operation = StellarSdk.PayoutOpBuilder.payoutOp(opts);
    return testHelper.server.submitOperationGroup([operation], source.accountId(), source)
        .then(response => {
            let result = StellarSdk.xdr.TransactionResult.fromXDR(new Buffer(response.result_xdr, "base64"));
            let success = result.result().results()[0].tr().payoutResult().success();
            let amount = StellarSdk.BaseOperation._fromXDRAmount(success.actualPayoutAmount()).toString();
            console.log(amount, ' <-- Payout actual total amount');
            return amount;
        });
}

module.exports = {
    performPayout
};
