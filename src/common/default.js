let env = {
  visible: true,
  data: {
    type: "mobile",
    os: "Android",
    os_version: "10",
    os_icon: "android.png",
    device_name: "Samsung Galaxy Note 8",
    screen_resolution: "1900x1100",
    browser: "Google Chrome",
    browser_version: "69.0",
    browser_icon: "google_chrome.png",
    className: "envinfo",
    device_icon: "computer.png"
  }
};

let preferences = {
  visible: true,
  type: "help_menu",
  data: {
    menus: [
      {
        title: "Help Center",
        className: "menu_help",
        childCol: 6,
        items: [
          "Language & Frameworks",
          "Github Samples",
          "CI/CD Tools",
          "Videos"
        ]
      },
      {
        title: "Environment Menu",
        className: "menu_help",
        childCol: 12,
        items: ["Configration Generator", "Parallel Generator"]
      }
    ]
  }
};

let accessKeyPref = {
  visible: true,
  type: "access_key",
  icon: "../../images/access-key.svg",
  text: "",
  data: {
    username: "user123",
    password: "EXTSII-223UI-1102G",
    access_key: "12536777812XFSytfas6387y23"
  }
};

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset",
      backgroundColor: "#05e7e6",
      borderColor: "#05e7e6",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const chartOptions = {
  scales: {
    xAxes: [
      {
        gridLines: { display: false },
        barPercentage: 0.4
      }
    ],
    yAxes: [{ gridLines: { display: true } }]
  }
};

const chartPref = {
  chartData: chartData,
  chartOptions: chartOptions
};
const videoJsOptions = {
  autoplay: false,
  controls: true,
  width: 200,
  height: 166,
  poster: "/poster/compare-img.jpg",
  sources: [
    {
      src:
        "https://d2i9lazdxxqw1n.cloudfront.net/ffeb148a33771d231cd218e3bfcb47fa/video/index.m3u8",
      type: "application/x-mpegURL",
      overrideNative: true
    }
  ]
};
const testDetails = {
  heading: "Falcon/Realtime Browser",
  testId: " FS-006S",
  tester: "Gragnama",
  ci_tool: "Jenkins",
  local_tunnel: "Null",
  issues_count: "20",
  start_time: "16:00",
  end_time: "20:00",
  base_url: "https://www.lambdatest.com",
  environment: {
    os: "Windows",
    os_icon: "windows.png",
    os_version: "10",
    browser: "Google Chrome",
    browser_icon: "google_chrome.png",
    browser_version: "69.0",
    resolution: "1900 x 1080",
    type: "desktop",
    screen_icon: "computer.png"
  }
};
const tableData = {
  status: "success",
  type: "console",
  tests: [
    {
      id: 1,
      name: "www.youtube.com?watch=9x73u7q2",
      status: 200,
      method: "Post",
      type: "text/html",
      size: "2kb",
      duration: "300ms",
      log_type: "info"
    },
    {
      id: 2,
      name: "www.youtube.com?watch=UI73u7q2",
      status: 200,
      method: "Post",
      type: "text/html",
      size: "2kb",
      duration: "300ms",
      log_type: "info"
    },
    {
      id: 3,
      name: "www.youtube.com?watch=1x77u7q2",
      status: 200,
      method: "Post",
      type: "text/html",
      size: "2kb",
      duration: "300ms",
      log_type: "exception"
    },
    {
      id: 4,
      name: "www.youtube.com?watch=6x73u7q2",
      status: 200,
      method: "Post",
      type: "text/html",
      size: "2kb",
      duration: "300ms",
      log_type: "info"
    },
    {
      id: 5,
      name: "www.youtube.com?watch=9x73u7q4",
      status: 200,
      method: "Post",
      type: "text/html",
      size: "2kb",
      duration: "300ms",
      log_type: "error"
    }
  ]
};
const debuggerData = {
  parent_name: [
    {
      tab_name: "CONSOLE",
      child_tabs: [
        { menu_name: "All", data: tableData, meta_key: "all" },
        { menu_name: "Info", meta_key: "info" },
        { menu_name: "Exception", meta_key: "exception" },
        { menu_name: "Error", meta_key: "error" }
      ]
    },
    {
      tab_name: "COMMAND"
    },
    {
      tab_name: "VISUAL"
    },
    {
      tab_name: "NETWORK",
      child_tabs: [
        { menu_name: "All", meta_key: "all" },
        { menu_name: "JS", meta_key: "js" },
        { menu_name: "IMG", meta_key: "img" },
        { menu_name: "MEDIA", meta_key: "media" },
        { menu_name: "DOC", meta_key: "doc" },
        { menu_name: "CSS", meta_key: "font" }
      ]
    },
    {
      tab_name: "RAW"
    },
    {
      tab_name: "METADATA"
    },
    {
      tab_name: "Download"
    },
    {
      tab_name: "MARK BULK ISSUES"
    }
  ]
};

const env_pc_browser = [
  { value: "Chrome", label: "Chrome" },
  { value: "Firefox", label: "Firefox" },
  { value: "Safari", label: "Safari" },
  { value: "Opera", label: "Opera" },
  { value: "Internet Explorer", label: "Internet Explorer" },
  { value: "Maxthon", label: "Maxthon" }
];
const env_pc_os = [
  { value: "Windows 10", label: "Chrome" },
  { value: "Windows 8.1", label: "Firefox" },
  { value: "Windows 7", label: "Safari" },
  { value: "OS X", label: "OS X" },
  { value: "Windows 8", label: "Windows 8" }
];
const env_mobile_browser = [
  { value: "Chrome", label: "Chrome" },
  { value: "Firefox", label: "Firefox" },
  { value: "Safari", label: "Safari" },
  { value: "Opera", label: "Opera" },
  { value: "Internet Explorer", label: "Internet Explorer" },
  { value: "Maxthon", label: "Maxthon" }
];
const env_mobile_model = [
  { value: "IPhone 7", label: "IPhone 7" },
  { value: "IPhone 8", label: "IPhone 8" },
  { value: "IPhone 6", label: "IPhone 6" },
  { value: "Moto G5", label: "Moto G5" },
  { value: "Samsung Galaxy S9", label: "Samsung Galaxy S9" },
  { value: "Samsung Galaxy Note 9", label: "Samsung Galaxy Note 9" }
];
/// For Counter On Analytics Tab
let counterData = {
  title: "Total Bugs Logged",
  count: 29
};

/// For Automation Logs Table
const automationLogs = [
  {
    date: "2018-09-09",
    test_id: "TestID1",
    build: "Nebula",
    users: "AS"
  },
  {
    date: "2018-09-09",
    test_id: "TestID1",
    build: "Nebula",
    users: "MG"
  },
  {
    date: "2018-09-09",
    test_id: "TestID1",
    build: "Nebula",
    users: "SS"
  },
  {
    date: "2018-09-09",
    test_id: "TestID1",
    build: "Nebula",
    users: "HS"
  },
  {
    date: "2018-09-09",
    test_id: "TestID1",
    build: "Nebula",
    users: "MB"
  }
];

export {
  chartPref,
  preferences,
  env,
  accessKeyPref,
  videoJsOptions,
  testDetails,
  debuggerData,
  env_pc_browser,
  env_pc_os,
  env_mobile_browser,
  env_mobile_model,
  counterData,
  automationLogs
};
