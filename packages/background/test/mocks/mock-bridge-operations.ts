import { BridgeTransaction } from '@block-wallet/background/controllers/BridgeController';
import {
    BridgeTransactionParams,
    MetaType,
    TransactionCategories,
    TransactionMeta,
    TransactionStatus,
} from '@block-wallet/background/controllers/transactions/utils/types';
import {
    BridgeImplementation,
    BridgeStatus,
    BridgeSubstatus,
} from '@block-wallet/background/utils/bridgeApi';
import { BigNumber, ethers } from 'ethers';

const BASE_SENDING_TRANSACTION = {
    approveTime: 1656527770143,
    blocksDropCount: 0,
    chainId: 137,
    gasEstimationFailed: false,
    id: 'a7f2cd6c-fa81-4ede-8448-d23a2e315b15',
    loadingGasValues: false,
    metaType: MetaType.REGULAR,
    methodSignature: {
        args: [
            {
                name: 'caller',
                type: 'address',
                value: '0x220bdA5c8994804Ac96ebe4DF184d25e5c2196D4',
            },
            {
                name: 'desc',
                type: 'tuple',
                value: [
                    '0x0000000000000000000000000000000000000000',
                    '0x220bdA5c8994804Ac96ebe4DF184d25e5c2196D4',
                    '0x281ae730d284bDA68F4e9Ac747319c8eDC7dF3B1',
                    {
                        type: 'BigNumber',
                        hex: '0x2386f26fc10000',
                    },
                    {
                        type: 'BigNumber',
                        hex: '0x0b9b43e8fe7b3b9fa9',
                    },
                    {
                        type: 'BigNumber',
                        hex: '0x00',
                    },
                    '0x',
                ],
            },
            {
                name: 'data',
                type: 'bytes',
                value: '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
            },
        ],
        name: 'Bridge',
    },
    origin: 'blank',
    rawTransaction:
        '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
    status: TransactionStatus.CONFIRMED,
    submittedTime: 1656527771238,
    bridgeParams: {
        bridgeImplementation: BridgeImplementation.LIFI_BRIDGE,
        blockWalletFee: BigNumber.from('0'),
        fromToken: {
            address: '0x0000000000000000000000000000000000000000',
            decimals: 18,
            logo: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
            name: 'MATIC',
            symbol: 'MATIC',
            type: '',
        },
        slippage: 0.5,
        fromTokenAmount: '10000000000000000000000',
        toToken: {
            address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
            decimals: 18,
            logo: 'https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png',
            name: 'MATIC',
            symbol: 'MATIC',
            type: '',
        },
        toTokenAmount: '9985390803817199636125',
        tool: 'hop',
        fromChainId: 137,
        toChainId: 1,
        estimatedDurationInSeconds: 200,
        role: 'SENDING' as 'SENDING' | 'RECEIVING',
    } as BridgeTransactionParams,
    time: 1656527769648,
    transactionCategory: TransactionCategories.BRIDGE,
    transactionParams: {
        chainId: 137,
        data: '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
        from: '0x4A3CD1E36091a66cf6dea0A77dAd564fFC8547a1',
        gasLimit: BigNumber.from('0x149970'),
        hash: '0xee26207273811c16adfa74c3401361add6b1296102e57c7502431965dbc9af92',
        maxFeePerGas: BigNumber.from('0x3902438500'),
        maxPriorityFeePerGas: BigNumber.from('0x20895d1cd1'),
        nonce: 5,
        r: '0x2bd56f6609b4597a75b656f0e1a007b5d7e435d4ef55aa8897b3fc08507c31e4',
        s: '0x33be7bb56f38e57ea4ebdecb3eacccd29daae2d6a0b89ff9f1ac146d870f6301',
        to: '0x1111111254fb6c44bac0bed2854e76f90643097d',
        type: 2,
        v: 0,
        value: BigNumber.from('0x021e19e0c9bab2400000'),
    },
    verifiedOnBlockchain: true,
} as TransactionMeta;

const RECEIVING_TX_BY_HASH = {
    hash: '0xa86600048ec06e339e3690f76caf1c1f404b83d410205a95b85ca842082c8c23',
    blockNumber: 24539324,
    blockHash:
        '0xabf06869c8970210b275beb407757d28a6d02eaac30e0def0feab73fca794b9b',
    nonce: 1,
    chainId: 1,
    gasLimit: 1,
    data: '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
    confirmations: 4,
    value: 0,
    wait: () => {},
    from: '0x305933e09871D4043b5036e09af794FACB3f6170',
    to: '0x362fa9d0bca5d19f743db50738345ce2b40ec99f',
    raw: '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
};

const RECEIVING_TX_RECEIPT = {
    to: '0x362fa9d0bca5d19f743db50738345ce2b40ec99f',
    transactionHash:
        '0xa86600048ec06e339e3690f76caf1c1f404b83d410205a95b85ca842082c8c23',
    data: '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
    from: '0x305933e09871D4043b5036e09af794FACB3f6170',
    contractAddress: '0x305933e09871D4043b5036e09af794FACB3f6170',
    transactionIndex: 0,
    logsBloom:
        '0x00000800000000000000000088000000000000000000000000000000040000000200000000000000400000000000000000000000080000002000010800200000000000000000008000200008000000000000010000400000000200000000000000000000020200000000000000000800000000000000040000004010004000400010000000050000000000000000000001000000000000400000000000000800020000000800000000010000000000000000000000000000000000000000000040200002000000000000408000000000000000000000000000000002000020000010000000000000200000000000000000000000000000040000000200000000',
    logs: [],
    blockHash:
        '0xabf06869c8970210b275beb407757d28a6d02eaac30e0def0feab73fca794b9b',
    blockNumber: 24539324,
    gasUsed: BigNumber.from('0x203'),
    cumulativeGasUsed: BigNumber.from('0x046f40'),
    confirmations: 4,
    type: 2,
    status: 1,
    byzantium: true,
    effectiveGasPrice: BigNumber.from('0x04a817c800'),
};

export default {
    mockNewBridgeTransactionCallParameters: (): BridgeTransaction => {
        return {
            params: {
                fromToken: {
                    address: '0x0000000000000000000000000000000000000000',
                    decimals: 18,
                    logo: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
                    name: 'MATIC',
                    symbol: 'MATIC',
                    type: '',
                },
                toToken: {
                    address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
                    decimals: 18,
                    logo: 'https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png',
                    name: 'MATIC',
                    symbol: 'MATIC',
                    type: '',
                },
                tool: 'hop',
                slippage: 0.5,
                fromAmount: '10000000000000000000000',
                toAmount: '9985390803817199636125',
                fromChainId: 137,
                toChainId: 1,
                spender: '0x362fA9D0bCa5D19f743Db50738345ce2b40eC99f',
                transactionRequest: {
                    chainId: 137,
                    data: '0x327a564d00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160f1111791883d510a6e182e0100606eee7e4e4de3ae9c5232e72a26c3686c024f0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb00000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000004a3cd1e36091a66cf6dea0a77dad564ffc8547a1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000021e19e0c9bab2400000000000000000000000000000000000000000000000000001672895d74129699c00000000000000000000000000000000000000000000020d11e176448b25fc41000000000000000000000000000000000000000000000000000000006308dbd30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054d41544943000000000000000000000000000000000000000000000000000000',
                    from: '0x4A3CD1E36091a66cf6dea0A77dAd564fFC8547a1',
                    gasLimit: '0x149970',
                    gasPrice: '0x0861c46816',
                    to: '0x362fA9D0bCa5D19f743Db50738345ce2b40eC99f',
                    value: '0x021e19e0c9bab2400000',
                },
                feeCosts: [],
                estimatedDurationInSeconds: 200,
            },
            customNonce: 5,
            gasPrice: BigNumber.from('0'),
            maxFeePerGas: BigNumber.from('0x3902438500'),
            maxPriorityFeePerGas: BigNumber.from('0x20895d1cd1'),
        };
    },
    mockBridgeTransactionAfterAdd: (
        updates: Partial<TransactionMeta> = {}
    ): TransactionMeta => {
        return {
            ...BASE_SENDING_TRANSACTION,
            ...(updates as TransactionMeta),
        };
    },
    mockGetReceivingTxByHash: () => {
        return RECEIVING_TX_BY_HASH;
    },
    mockGetReceivingTxReceipt: () => {
        return RECEIVING_TX_RECEIPT;
    },
    mockBridgeSuccessfulOperation: (sendTx: TransactionMeta) => {
        return {
            sendTransaction: {
                txLink: 'sending_tx_link',
                txHash: sendTx.transactionParams.hash!,
                chainId: sendTx.chainId!,
                amount: sendTx.bridgeParams!.fromTokenAmount!,
            },
            receiveTransaction: {
                amount: sendTx.bridgeParams!.toTokenAmount!,
                token: sendTx.bridgeParams!.toToken!,
                txHash: '0xa86600048ec06e339e3690f76caf1c1f404b83d410205a95b85ca842082c8c23',
                chainId: 1,
                txLink: 'receiving_Tx_link',
            },
            status: BridgeStatus.DONE,
            tool: 'hop',
            substatus: BridgeSubstatus.COMPLETED,
        };
    },
};