import createRestApiClient from "../../utility/createRestApiClient";

import {
  DEBUGGER_LOADING,
  DEBUGGER_SUCCESS,
  DEBUGGER_FAILED,
  DEBUGGER_CLEAR
} from "../actionTypeConstants/Automation";

const mockApiEndpoint = `https://086966bf-77ff-457d-8f18-2c9f784b4710.mock.pstmn.io`;

const mockApiClient = createRestApiClient().withConfig({
  baseURL: mockApiEndpoint
}).client;

export function fetchTimeLineData() {
  const header = {
    "x-api-key": "18cebd873131468883714b6052966380",
    "x-mock-response-code": "200"
  };

  return {
    types: [DEBUGGER_LOADING, DEBUGGER_SUCCESS, DEBUGGER_FAILED],
    promise: () =>
      mockApiClient.get(
        `/api/v1/build?buildId=1,2&status=completed,passed&username=sawang,nikhily&date=2018-09-09&limit=50&offset=0&excludeTest=true`,
        {
          headers: header
        }
      )
  };
}
