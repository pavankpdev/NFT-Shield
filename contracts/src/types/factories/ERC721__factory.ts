/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200263838038062002638833981810160405281019062000037919062000193565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b50505062000337565b8280546200007f90620002a3565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200023a565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e8482856200026d565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b6000604051905081810181811067ffffffffffffffff8211171562000230576200022f62000308565b5b8060405250919050565b600067ffffffffffffffff82111562000258576200025762000308565b5b601f19601f8301169050602081019050919050565b60005b838110156200028d57808201518184015260208101905062000270565b838111156200029d576000848401525b50505050565b60006002820490506001821680620002bc57607f821691505b60208210811415620002d357620002d2620002d9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122f180620003476000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611681565b6102bc565b6040516100fb9190611cf9565b60405180910390f35b61010c61039e565b6040516101199190611d14565b60405180910390f35b61013c600480360381019061013791906116d3565b610430565b6040516101499190611c92565b60405180910390f35b61016c60048036038101906101679190611645565b6104b5565b005b6101886004803603810190610183919061153f565b6105cd565b005b6101a4600480360381019061019f919061153f565b61062d565b005b6101c060048036038101906101bb91906116d3565b61064d565b6040516101cd9190611c92565b60405180910390f35b6101f060048036038101906101eb91906114da565b6106ff565b6040516101fd9190611eb6565b60405180910390f35b61020e6107b7565b60405161021b9190611d14565b60405180910390f35b61023e60048036038101906102399190611609565b610849565b005b61025a6004803603810190610255919061158e565b61085f565b005b610276600480360381019061027191906116d3565b6108c1565b6040516102839190611d14565b60405180910390f35b6102a660048036038101906102a19190611503565b610968565b6040516102b39190611cf9565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103975750610396826109fc565b5b9050919050565b6060600080546103ad906120e6565b80601f01602080910402602001604051908101604052809291908181526020018280546103d9906120e6565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610a66565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611e16565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611e76565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610ad2565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610ad2565b610968565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611db6565b60405180910390fd5b6105c88383610ada565b505050565b6105de6105d8610ad2565b82610b93565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611e96565b60405180910390fd5b610628838383610c71565b505050565b6106488383836040518060200160405280600081525061085f565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611df6565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611dd6565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c6906120e6565b80601f01602080910402602001604051908101604052809291908181526020018280546107f2906120e6565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b61085b610854610ad2565b8383610ecd565b5050565b61087061086a610ad2565b83610b93565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a690611e96565b60405180910390fd5b6108bb8484848461103a565b50505050565b60606108cc82610a66565b61090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290611e56565b60405180910390fd5b6000610915611096565b905060008151116109355760405180602001604052806000815250610960565b8061093f846110ad565b604051602001610950929190611c6e565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4d8361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b9e82610a66565b610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490611d96565b60405180910390fd5b6000610be88361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c5757508373ffffffffffffffffffffffffffffffffffffffff16610c3f84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610c685750610c678185610968565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c918261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610ce7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cde90611e36565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90611d56565b60405180910390fd5b610d6283838361125a565b610d6d600082610ada565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dbd9190611ffc565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e149190611f75565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3390611d76565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161102d9190611cf9565b60405180910390a3505050565b611045848484610c71565b6110518484848461125f565b611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108790611d36565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156110f5576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611255565b600082905060005b6000821461112757808061111090612118565b915050600a826111209190611fcb565b91506110fd565b60008167ffffffffffffffff811115611169577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561119b5781602001600182028036833780820191505090505b5090505b6000851461124e576001826111b49190611ffc565b9150600a856111c39190612161565b60306111cf9190611f75565b60f81b81838151811061120b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112479190611fcb565b945061119f565b8093505050505b919050565b505050565b60006112808473ffffffffffffffffffffffffffffffffffffffff166113f6565b156113e9578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026112a9610ad2565b8786866040518563ffffffff1660e01b81526004016112cb9493929190611cad565b602060405180830381600087803b1580156112e557600080fd5b505af192505050801561131657506040513d601f19601f8201168201806040525081019061131391906116aa565b60015b611399573d8060008114611346576040519150601f19603f3d011682016040523d82523d6000602084013e61134b565b606091505b50600081511415611391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138890611d36565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113ee565b600190505b949350505050565b600080823b905060008111915050919050565b600061141c61141784611f02565b611ed1565b90508281526020810184848401111561143457600080fd5b61143f8482856120a4565b509392505050565b6000813590506114568161225f565b92915050565b60008135905061146b81612276565b92915050565b6000813590506114808161228d565b92915050565b6000815190506114958161228d565b92915050565b600082601f8301126114ac57600080fd5b81356114bc848260208601611409565b91505092915050565b6000813590506114d4816122a4565b92915050565b6000602082840312156114ec57600080fd5b60006114fa84828501611447565b91505092915050565b6000806040838503121561151657600080fd5b600061152485828601611447565b925050602061153585828601611447565b9150509250929050565b60008060006060848603121561155457600080fd5b600061156286828701611447565b935050602061157386828701611447565b9250506040611584868287016114c5565b9150509250925092565b600080600080608085870312156115a457600080fd5b60006115b287828801611447565b94505060206115c387828801611447565b93505060406115d4878288016114c5565b925050606085013567ffffffffffffffff8111156115f157600080fd5b6115fd8782880161149b565b91505092959194509250565b6000806040838503121561161c57600080fd5b600061162a85828601611447565b925050602061163b8582860161145c565b9150509250929050565b6000806040838503121561165857600080fd5b600061166685828601611447565b9250506020611677858286016114c5565b9150509250929050565b60006020828403121561169357600080fd5b60006116a184828501611471565b91505092915050565b6000602082840312156116bc57600080fd5b60006116ca84828501611486565b91505092915050565b6000602082840312156116e557600080fd5b60006116f3848285016114c5565b91505092915050565b61170581612030565b82525050565b61171481612042565b82525050565b600061172582611f32565b61172f8185611f48565b935061173f8185602086016120b3565b6117488161224e565b840191505092915050565b600061175e82611f3d565b6117688185611f59565b93506117788185602086016120b3565b6117818161224e565b840191505092915050565b600061179782611f3d565b6117a18185611f6a565b93506117b18185602086016120b3565b80840191505092915050565b60006117ca603283611f59565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b6000611830602483611f59565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611896601983611f59565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b60006118d6602c83611f59565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b600061193c603883611f59565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b60006119a2602a83611f59565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a08602983611f59565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a6e602c83611f59565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000611ad4602983611f59565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b3a602f83611f59565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000611ba0602183611f59565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611c06603183611f59565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b611c688161209a565b82525050565b6000611c7a828561178c565b9150611c86828461178c565b91508190509392505050565b6000602082019050611ca760008301846116fc565b92915050565b6000608082019050611cc260008301876116fc565b611ccf60208301866116fc565b611cdc6040830185611c5f565b8181036060830152611cee818461171a565b905095945050505050565b6000602082019050611d0e600083018461170b565b92915050565b60006020820190508181036000830152611d2e8184611753565b905092915050565b60006020820190508181036000830152611d4f816117bd565b9050919050565b60006020820190508181036000830152611d6f81611823565b9050919050565b60006020820190508181036000830152611d8f81611889565b9050919050565b60006020820190508181036000830152611daf816118c9565b9050919050565b60006020820190508181036000830152611dcf8161192f565b9050919050565b60006020820190508181036000830152611def81611995565b9050919050565b60006020820190508181036000830152611e0f816119fb565b9050919050565b60006020820190508181036000830152611e2f81611a61565b9050919050565b60006020820190508181036000830152611e4f81611ac7565b9050919050565b60006020820190508181036000830152611e6f81611b2d565b9050919050565b60006020820190508181036000830152611e8f81611b93565b9050919050565b60006020820190508181036000830152611eaf81611bf9565b9050919050565b6000602082019050611ecb6000830184611c5f565b92915050565b6000604051905081810181811067ffffffffffffffff82111715611ef857611ef761221f565b5b8060405250919050565b600067ffffffffffffffff821115611f1d57611f1c61221f565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611f808261209a565b9150611f8b8361209a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611fc057611fbf612192565b5b828201905092915050565b6000611fd68261209a565b9150611fe18361209a565b925082611ff157611ff06121c1565b5b828204905092915050565b60006120078261209a565b91506120128361209a565b92508282101561202557612024612192565b5b828203905092915050565b600061203b8261207a565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156120d15780820151818401526020810190506120b6565b838111156120e0576000848401525b50505050565b600060028204905060018216806120fe57607f821691505b60208210811415612112576121116121f0565b5b50919050565b60006121238261209a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561215657612155612192565b5b600182019050919050565b600061216c8261209a565b91506121778361209a565b925082612187576121866121c1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61226881612030565b811461227357600080fd5b50565b61227f81612042565b811461228a57600080fd5b50565b6122968161204e565b81146122a157600080fd5b50565b6122ad8161209a565b81146122b857600080fd5b5056fea2646970667358221220ee78f46cbe0589f68f9aa8944ed72c06119ce8132e316302fc6aab7d88d187c064736f6c63430008000033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
