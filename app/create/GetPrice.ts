"use server";
import fs from "fs";

const getEstimatedPrice = async (
  rooms: string,
  city: string,
  stateCode: string
) => {
  const path = `./data/Metro_zhvi_bdrmcnt_${rooms}_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv`;
  const fileData = fs.readFileSync(path, "utf-8");
  const output: { [key: string]: string } = {};

  const lines = fileData.split("\n");
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split(",");
    console.log(line);
    if (line.length >= 6) {
      output[line[2]] = line[5].slice(0, -2);
    } else {
      console.warn("Unexpected line format:", line);
      continue;
    }
  }
  console.log(output[`${city} - ${stateCode}`]);
  return parseInt(output[`${city} - ${stateCode}`]) || 0;
};

export default getEstimatedPrice;
