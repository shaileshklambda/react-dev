import createRestApiClient from "../../utility/createRestApiClient";

import {
  DEBUGGER_LOADING,
  DEBUGGER_SUCCESS,
  DEBUGGER_FAILED,
  DEBUGGER_CLEAR
} from "../actionTypeConstants/Automation";

const HOST = process.env.REACT_APP_MOCK_HOST;

const NETWORK_SUFFIX = process.env.REACT_APP_MOCK_NETWORK_SUFFIX;

console.log(process.env);

const MOCK_SESSION_ID = process.env.REACT_APP_MOCK_SESSION_ID;

const mockUrl = `/${MOCK_SESSION_ID}/${NETWORK_SUFFIX}`;

console.log(mockUrl);

const mockApiEndpoint = HOST;

const mockApiClient = createRestApiClient().withConfig({
  baseURL: mockApiEndpoint
}).client;

export function fetchNetworkData() {
  return {
    types: [DEBUGGER_LOADING, DEBUGGER_SUCCESS, DEBUGGER_FAILED],
    promise: () =>
      mockApiClient.get(`${mockUrl}`, {
        headers: {}
      })
  };
}
