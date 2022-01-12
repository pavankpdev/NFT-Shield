/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vehicle, VehicleInterface } from "../Vehicle";

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
        name: "driver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "vehicle_no",
            type: "string",
          },
          {
            internalType: "string",
            name: "RC",
            type: "string",
          },
          {
            internalType: "string",
            name: "vehicleImages",
            type: "string",
          },
          {
            internalType: "enum Vehicle.VEHICLE_TYPE",
            name: "vehicleType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "driver",
            type: "address",
          },
        ],
        internalType: "struct Vehicle.VEHICLE_INFO",
        name: "_vehicle",
        type: "tuple",
      },
    ],
    name: "addVehicle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "driver",
        type: "address",
      },
    ],
    name: "getVehicle",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "vehicle_no",
            type: "string",
          },
          {
            internalType: "string",
            name: "RC",
            type: "string",
          },
          {
            internalType: "string",
            name: "vehicleImages",
            type: "string",
          },
          {
            internalType: "enum Vehicle.VEHICLE_TYPE",
            name: "vehicleType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "driver",
            type: "address",
          },
        ],
        internalType: "struct Vehicle.VEHICLE_INFO",
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
        name: "driver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "vehicle_no",
            type: "string",
          },
          {
            internalType: "string",
            name: "RC",
            type: "string",
          },
          {
            internalType: "string",
            name: "vehicleImages",
            type: "string",
          },
          {
            internalType: "enum Vehicle.VEHICLE_TYPE",
            name: "vehicleType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "driver",
            type: "address",
          },
        ],
        internalType: "struct Vehicle.VEHICLE_INFO",
        name: "_vehicle",
        type: "tuple",
      },
    ],
    name: "updateVehicle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6111ea8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806349d883831461006757806364116aa814610083578063715018a61461009f5780638da5cb5b146100a9578063a93ab101146100c7578063f2fde38b146100f7575b600080fd5b610081600480360381019061007c9190610d21565b610113565b005b61009d60048036038101906100989190610d21565b6102d6565b005b6100a7610499565b005b6100b1610521565b6040516100be9190610f05565b60405180910390f35b6100e160048036038101906100dc9190610cf8565b61054a565b6040516100ee9190610f60565b60405180910390f35b610111600480360381019061010c9190610cf8565b6108b2565b005b61011b6109aa565b73ffffffffffffffffffffffffffffffffffffffff16610139610521565b73ffffffffffffffffffffffffffffffffffffffff161461018f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018690610f40565b60405180910390fd5b610197610a76565b81905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190805190602001906101f6929190610af3565b506020820151816001019080519060200190610213929190610af3565b506040820151816002019080519060200190610230929190610af3565b5060608201518160030160006101000a81548160ff02191690836003811115610282577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060808201518160030160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050505050565b6102de6109aa565b73ffffffffffffffffffffffffffffffffffffffff166102fc610521565b73ffffffffffffffffffffffffffffffffffffffff1614610352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034990610f40565b60405180910390fd5b61035a610a76565b81905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190805190602001906103b9929190610af3565b5060208201518160010190805190602001906103d6929190610af3565b5060408201518160020190805190602001906103f3929190610af3565b5060608201518160030160006101000a81548160ff02191690836003811115610445577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060808201518160030160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050505050565b6104a16109aa565b73ffffffffffffffffffffffffffffffffffffffff166104bf610521565b73ffffffffffffffffffffffffffffffffffffffff1614610515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050c90610f40565b60405180910390fd5b61051f60006109b2565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610552610a76565b61055a6109aa565b73ffffffffffffffffffffffffffffffffffffffff16610578610521565b73ffffffffffffffffffffffffffffffffffffffff16146105ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c590610f40565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054610628906110a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610654906110a9565b80156106a15780601f10610676576101008083540402835291602001916106a1565b820191906000526020600020905b81548152906001019060200180831161068457829003601f168201915b505050505081526020016001820180546106ba906110a9565b80601f01602080910402602001604051908101604052809291908181526020018280546106e6906110a9565b80156107335780601f1061070857610100808354040283529160200191610733565b820191906000526020600020905b81548152906001019060200180831161071657829003601f168201915b5050505050815260200160028201805461074c906110a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610778906110a9565b80156107c55780601f1061079a576101008083540402835291602001916107c5565b820191906000526020600020905b8154815290600101906020018083116107a857829003601f168201915b505050505081526020016003820160009054906101000a900460ff166003811115610819577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811115610851577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81526020016003820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b6108ba6109aa565b73ffffffffffffffffffffffffffffffffffffffff166108d8610521565b73ffffffffffffffffffffffffffffffffffffffff161461092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590610f40565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561099e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099590610f20565b60405180910390fd5b6109a7816109b2565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6040518060a0016040528060608152602001606081526020016060815260200160006003811115610ad0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054610aff906110a9565b90600052602060002090601f016020900481019282610b215760008555610b68565b82601f10610b3a57805160ff1916838001178555610b68565b82800160010185558215610b68579182015b82811115610b67578251825591602001919060010190610b4c565b5b509050610b759190610b79565b5090565b5b80821115610b92576000816000905550600101610b7a565b5090565b6000610ba9610ba484610fb3565b610f82565b905082815260208101848484011115610bc157600080fd5b610bcc848285611067565b509392505050565b600081359050610be38161118d565b92915050565b600081359050610bf8816111a4565b92915050565b600082601f830112610c0f57600080fd5b8135610c1f848260208601610b96565b91505092915050565b600060a08284031215610c3a57600080fd5b610c4460a0610f82565b9050600082013567ffffffffffffffff811115610c6057600080fd5b610c6c84828501610bfe565b600083015250602082013567ffffffffffffffff811115610c8c57600080fd5b610c9884828501610bfe565b602083015250604082013567ffffffffffffffff811115610cb857600080fd5b610cc484828501610bfe565b6040830152506060610cd884828501610be9565b6060830152506080610cec84828501610bd4565b60808301525092915050565b600060208284031215610d0a57600080fd5b6000610d1884828501610bd4565b91505092915050565b60008060408385031215610d3457600080fd5b6000610d4285828601610bd4565b925050602083013567ffffffffffffffff811115610d5f57600080fd5b610d6b85828601610c28565b9150509250929050565b610d7e81611010565b82525050565b610d8d81611010565b82525050565b610d9c81611055565b82525050565b6000610dad82610fe3565b610db78185610fee565b9350610dc7818560208601611076565b610dd081611168565b840191505092915050565b6000610de8602683610fff565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610e4e602083610fff565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b600060a0830160008301518482036000860152610e9e8282610da2565b91505060208301518482036020860152610eb88282610da2565b91505060408301518482036040860152610ed28282610da2565b9150506060830151610ee76060860182610d93565b506080830151610efa6080860182610d75565b508091505092915050565b6000602082019050610f1a6000830184610d84565b92915050565b60006020820190508181036000830152610f3981610ddb565b9050919050565b60006020820190508181036000830152610f5981610e41565b9050919050565b60006020820190508181036000830152610f7a8184610e81565b905092915050565b6000604051905081810181811067ffffffffffffffff82111715610fa957610fa8611139565b5b8060405250919050565b600067ffffffffffffffff821115610fce57610fcd611139565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061101b82611035565b9050919050565b600081905061103082611179565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106082611022565b9050919050565b82818337600083830152505050565b60005b83811015611094578082015181840152602081019050611079565b838111156110a3576000848401525b50505050565b600060028204905060018216806110c157607f821691505b602082108114156110d5576110d461110a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6004811061118a576111896110db565b5b50565b61119681611010565b81146111a157600080fd5b50565b600481106111b157600080fd5b5056fea26469706673582212203b2ecba70ea3a3692dbdc3b83cd78d4e522677dbb9af7c3803763ad0d0173bfa64736f6c63430008000033";

type VehicleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VehicleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vehicle__factory extends ContractFactory {
  constructor(...args: VehicleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vehicle> {
    return super.deploy(overrides || {}) as Promise<Vehicle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vehicle {
    return super.attach(address) as Vehicle;
  }
  connect(signer: Signer): Vehicle__factory {
    return super.connect(signer) as Vehicle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VehicleInterface {
    return new utils.Interface(_abi) as VehicleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vehicle {
    return new Contract(address, _abi, signerOrProvider) as Vehicle;
  }
}
