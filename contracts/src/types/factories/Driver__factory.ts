/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Driver, DriverInterface } from "../Driver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "fullname",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "dob",
            type: "string",
          },
          {
            internalType: "string",
            name: "driverAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "govtID",
            type: "string",
          },
          {
            internalType: "string",
            name: "picture",
            type: "string",
          },
          {
            internalType: "string",
            name: "DL",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct Driver.DRIVER",
        name: "_driver",
        type: "tuple",
      },
    ],
    name: "createDriver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddr",
        type: "address",
      },
    ],
    name: "getDriver",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "fullname",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "dob",
            type: "string",
          },
          {
            internalType: "string",
            name: "driverAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "govtID",
            type: "string",
          },
          {
            internalType: "string",
            name: "picture",
            type: "string",
          },
          {
            internalType: "string",
            name: "DL",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct Driver.DRIVER",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "fullname",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "dob",
            type: "string",
          },
          {
            internalType: "string",
            name: "driverAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "govtID",
            type: "string",
          },
          {
            internalType: "string",
            name: "picture",
            type: "string",
          },
          {
            internalType: "string",
            name: "DL",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct Driver.DRIVER",
        name: "_driver",
        type: "tuple",
      },
    ],
    name: "updateDriver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61145a8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630a1a046314610067578063642f99e81461009757806365c301ab146100c7578063715018a6146100f75780638da5cb5b14610101578063f2fde38b1461011f575b600080fd5b610081600480360381019061007c9190610fc2565b61013b565b60405161008e91906111ed565b60405180910390f35b6100b160048036038101906100ac9190610fc2565b610323565b6040516100be91906111ed565b60405180910390f35b6100e160048036038101906100dc9190610f99565b61050b565b6040516100ee9190611248565b60405180910390f35b6100ff610a3b565b005b610109610ac3565b60405161011691906111ed565b60405180910390f35b61013960048036038101906101349190610f99565b610aec565b005b6000610145610be4565b73ffffffffffffffffffffffffffffffffffffffff16610163610ac3565b73ffffffffffffffffffffffffffffffffffffffff16146101b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b090611228565b60405180910390fd5b6101c1610cb0565b82905080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190610220929190610d0b565b50602082015181600101908051906020019061023d929190610d0b565b50604082015181600201908051906020019061025a929190610d0b565b506060820151816003019080519060200190610277929190610d0b565b506080820151816004019080519060200190610294929190610d0b565b5060a08201518160050190805190602001906102b1929190610d0b565b5060c08201518160060190805190602001906102ce929190610d0b565b5060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508391505092915050565b600061032d610be4565b73ffffffffffffffffffffffffffffffffffffffff1661034b610ac3565b73ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039890611228565b60405180910390fd5b6103a9610cb0565b82905080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190610408929190610d0b565b506020820151816001019080519060200190610425929190610d0b565b506040820151816002019080519060200190610442929190610d0b565b50606082015181600301908051906020019061045f929190610d0b565b50608082015181600401908051906020019061047c929190610d0b565b5060a0820151816005019080519060200190610499929190610d0b565b5060c08201518160060190805190602001906104b6929190610d0b565b5060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508391505092915050565b610513610cb0565b61051b610be4565b73ffffffffffffffffffffffffffffffffffffffff16610539610ac3565b73ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058690611228565b60405180910390fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806101000160405290816000820180546105ec9061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546106189061136c565b80156106655780601f1061063a57610100808354040283529160200191610665565b820191906000526020600020905b81548152906001019060200180831161064857829003601f168201915b5050505050815260200160018201805461067e9061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546106aa9061136c565b80156106f75780601f106106cc576101008083540402835291602001916106f7565b820191906000526020600020905b8154815290600101906020018083116106da57829003601f168201915b505050505081526020016002820180546107109061136c565b80601f016020809104026020016040519081016040528092919081815260200182805461073c9061136c565b80156107895780601f1061075e57610100808354040283529160200191610789565b820191906000526020600020905b81548152906001019060200180831161076c57829003601f168201915b505050505081526020016003820180546107a29061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546107ce9061136c565b801561081b5780601f106107f05761010080835404028352916020019161081b565b820191906000526020600020905b8154815290600101906020018083116107fe57829003601f168201915b505050505081526020016004820180546108349061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546108609061136c565b80156108ad5780601f10610882576101008083540402835291602001916108ad565b820191906000526020600020905b81548152906001019060200180831161089057829003601f168201915b505050505081526020016005820180546108c69061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546108f29061136c565b801561093f5780601f106109145761010080835404028352916020019161093f565b820191906000526020600020905b81548152906001019060200180831161092257829003601f168201915b505050505081526020016006820180546109589061136c565b80601f01602080910402602001604051908101604052809291908181526020018280546109849061136c565b80156109d15780601f106109a6576101008083540402835291602001916109d1565b820191906000526020600020905b8154815290600101906020018083116109b457829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080915050919050565b610a43610be4565b73ffffffffffffffffffffffffffffffffffffffff16610a61610ac3565b73ffffffffffffffffffffffffffffffffffffffff1614610ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aae90611228565b60405180910390fd5b610ac16000610bec565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610af4610be4565b73ffffffffffffffffffffffffffffffffffffffff16610b12610ac3565b73ffffffffffffffffffffffffffffffffffffffff1614610b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5f90611228565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcf90611208565b60405180910390fd5b610be181610bec565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60405180610100016040528060608152602001606081526020016060815260200160608152602001606081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054610d179061136c565b90600052602060002090601f016020900481019282610d395760008555610d80565b82601f10610d5257805160ff1916838001178555610d80565b82800160010185558215610d80579182015b82811115610d7f578251825591602001919060010190610d64565b5b509050610d8d9190610d91565b5090565b5b80821115610daa576000816000905550600101610d92565b5090565b6000610dc1610dbc8461129b565b61126a565b905082815260208101848484011115610dd957600080fd5b610de484828561132a565b509392505050565b600081359050610dfb8161140d565b92915050565b600082601f830112610e1257600080fd5b8135610e22848260208601610dae565b91505092915050565b60006101008284031215610e3e57600080fd5b610e4961010061126a565b9050600082013567ffffffffffffffff811115610e6557600080fd5b610e7184828501610e01565b600083015250602082013567ffffffffffffffff811115610e9157600080fd5b610e9d84828501610e01565b602083015250604082013567ffffffffffffffff811115610ebd57600080fd5b610ec984828501610e01565b604083015250606082013567ffffffffffffffff811115610ee957600080fd5b610ef584828501610e01565b606083015250608082013567ffffffffffffffff811115610f1557600080fd5b610f2184828501610e01565b60808301525060a082013567ffffffffffffffff811115610f4157600080fd5b610f4d84828501610e01565b60a08301525060c082013567ffffffffffffffff811115610f6d57600080fd5b610f7984828501610e01565b60c08301525060e0610f8d84828501610dec565b60e08301525092915050565b600060208284031215610fab57600080fd5b6000610fb984828501610dec565b91505092915050565b60008060408385031215610fd557600080fd5b6000610fe385828601610dec565b925050602083013567ffffffffffffffff81111561100057600080fd5b61100c85828601610e2b565b9150509250929050565b61101f816112f8565b82525050565b61102e816112f8565b82525050565b600061103f826112cb565b61104981856112d6565b9350611059818560208601611339565b611062816113fc565b840191505092915050565b600061107a6026836112e7565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006110e06020836112e7565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006101008301600083015184820360008601526111318282611034565b9150506020830151848203602086015261114b8282611034565b915050604083015184820360408601526111658282611034565b9150506060830151848203606086015261117f8282611034565b915050608083015184820360808601526111998282611034565b91505060a083015184820360a08601526111b38282611034565b91505060c083015184820360c08601526111cd8282611034565b91505060e08301516111e260e0860182611016565b508091505092915050565b60006020820190506112026000830184611025565b92915050565b600060208201905081810360008301526112218161106d565b9050919050565b60006020820190508181036000830152611241816110d3565b9050919050565b600060208201905081810360008301526112628184611113565b905092915050565b6000604051905081810181811067ffffffffffffffff82111715611291576112906113cd565b5b8060405250919050565b600067ffffffffffffffff8211156112b6576112b56113cd565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006113038261130a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101561135757808201518184015260208101905061133c565b83811115611366576000848401525b50505050565b6000600282049050600182168061138457607f821691505b602082108114156113985761139761139e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611416816112f8565b811461142157600080fd5b5056fea264697066735822122084a09c0de677eddbe6b6291d735b9a7f22f245d817449528c013d95557bbb60064736f6c63430008000033";

type DriverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DriverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Driver__factory extends ContractFactory {
  constructor(...args: DriverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Driver> {
    return super.deploy(overrides || {}) as Promise<Driver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Driver {
    return super.attach(address) as Driver;
  }
  connect(signer: Signer): Driver__factory {
    return super.connect(signer) as Driver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DriverInterface {
    return new utils.Interface(_abi) as DriverInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Driver {
    return new Contract(address, _abi, signerOrProvider) as Driver;
  }
}