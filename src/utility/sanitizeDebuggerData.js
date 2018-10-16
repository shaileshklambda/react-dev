import { formatBytes } from "./utilityFunctions";
import Duration from "duration";
/*
    To Rebuild Data for Network Tab For Showing In Debugger Component
*/
export const sanitizeNetworkData = network => {
  // console.log("here", network)
  // Empty Array for final Data;
  let result = [];
  result["data"] = [];
  network.data.data.map((item, index) => {
    //Sanitized Object for Each Row
    let time = item.time;
    let duration = new Duration(new Date(time));
    duration = time > 60 ? (time / 60).toFixed(2) + " mins" : time + " seconds";
    let obj = {
      name: item.request.url,
      status: item.response.status,
      method: item.request.method,
      type: item.response.content.mimeType,
      size: formatBytes(item.response.content.size),
      duration: duration
    };
    result.data.push(obj);
  });
  result["type"] = "network";
  result["tab_menu"] = {
    child_tabs: [
      { menu_name: "All", meta_key: "all" },
      { menu_name: "JS", meta_key: "js" },
      { menu_name: "IMG", meta_key: "img" },
      { menu_name: "MEDIA", meta_key: "media" },
      { menu_name: "DOC", meta_key: "doc" },
      { menu_name: "CSS", meta_key: "font" }
    ]
  };
  return result;
};
