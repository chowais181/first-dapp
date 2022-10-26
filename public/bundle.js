let contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
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
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

document.getElementById("landing").style.display = "none";
let contractAddress = "0x21Ddfc5957111879cACEd412F4F9231fB85B4690";
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
  console.log("id", e.id[4]);
  moc.methods
    .vote(e.id[4])
    .send({
      from: `0x52b823D53c258b3612677EfAc2a5EcBDeCd3E00C`,
    })
    .then((result) => {
      console.log(result);
      refresh();
    });
}
