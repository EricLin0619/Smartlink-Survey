import {
  readContract,
  writeContract,
  prepareWriteContract,
} from "@wagmi/core";
import Questionnaire from "../abi/questionnaire.json";

const address = "0xFB67AeD6af2808668a2848b0D90F6E697e6639A1"

export async function addQuestions(_questions: string[]) {
  const config = await prepareWriteContract({
    address: address as `0x${string}`,
    abi: Questionnaire,
    chainId: 11155111,
    functionName: "addQuestions",
    args: [_questions],
  });
  await writeContract(config);
}

export async function addUser(_phoneNumbers: string[]) {
    const config = await prepareWriteContract({
        address: address as `0x${string}`,
        abi: Questionnaire,
        chainId: 11155111,
        functionName: "addUser",
        args: [_phoneNumbers],
      });
      await writeContract(config);
}

export async function addAnswer(_phoneNumber: string, _answers: string[]) {
    const config = await prepareWriteContract({
        address: address as `0x${string}`,
        abi: Questionnaire,
        chainId: 11155111,
        functionName: "addAnswer",
        args: [_phoneNumber, _answers],
      });
      await writeContract(config);
}

export async function getQuestionsById(_id: number) {
    const data = await readContract({
        address: address as `0x${string}`,
        abi: Questionnaire,
        chainId: 11155111,
        functionName: 'questions',
        args: [
          _id
        ]
      })
      return data
}

export async function userIsLegal(_phoneNumer: string) {
  const data = await readContract({
      address: address as `0x${string}`,
      abi: Questionnaire,
      chainId: 11155111,
      functionName: 'legalUser',
      args: [
        _phoneNumer
      ]
    })
    return data
}


