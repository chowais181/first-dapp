let contractABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
document.getElementById("landing").style.display = "none";
let contractAddress = "0x795D87caE4eCFceCC5A21b35Cd154D00a2d55BDC";
let web3 = new Web3("http://127.0.0.1:9545/");
let moc = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  refresh();
  if (web3) {
    document.getElementById("landing").style.display = "flex";
    document.getElementById("cover").style.display = "none";
  }
});

const refresh = () => {
  for (let i = 0; i < 3; i++)
    moc.methods
      .getItem(i)
      .call()
      .then((result) => {
        document.getElementById(`v${i}`).innerHTML = result;
      });
};

function vote(e) {
  console.log(e.id[4]);
  moc.methods
    .vote(e.id[4])
    .send({
      from: `0x22cdb9c4359c5f4163ac600b2c786fb581a0ddd1`,
    })
    .then((result) => {
      console.log(result);
      refresh();
    });
}
