const buildOptions = [
  { label: "Build 1", value: 1 },
  { label: "Build 2", value: 2 },
  { label: "Build 3", value: 3 },
  { label: "Build 4", value: 4 },
  { label: "Build 5", value: 5 },
  { label: "Build 5", value: 6 }
];

const username = [
  { label: "Username 1", value: 1 },
  { label: "Username 2", value: 2 },
  { label: "Username 3", value: 3 },
  { label: "Username 4", value: 4 },
  { label: "Username 5", value: 5 },
  { label: "Username 5", value: 6 }
];

const status = [
  { label: "Completed", value: 1 },
  { label: "Time-out", value: 2 },
  { label: "Allocating VM", value: 3 },
  { label: "Running", value: 4 },
  { label: "Passed", value: 5 },
  { label: "Failed", value: 6 }
];

const statusStyles = {
  option: (base, state) => ({
    padding: "2px 3px",
    width: "110",
    color: "#4a4a4a",
    cursor: "pointer",
    fontSize: "12px"
  }),
  control: () => ({
    // none of react-selects styles are passed to <View />
    width: 200,
    display: "none"
  })
};

const customStyles = {
  option: (base, state) => ({
    padding: "2px 3px",
    width: "120",
    color: "#4a4a4a",
    cursor: "pointer",
    fontSize: "12px"
  }),
  control: () => ({
    // none of react-selects styles are passed to <View />
    width: 200,
    display: "none"
  })
};

export { buildOptions, username, status, statusStyles, customStyles };
