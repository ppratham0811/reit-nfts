"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import data from "@/data/US_States_and_Cities.json";
import { useEffect, useState } from "react";
import getEstimatedPrice from "./GetPrice";
import { Input } from "@/components/ui/input";
import { useWalletContext } from "@/lib/context/WalletContext";
import { useDidContext } from "@/lib/context/DidContext";
import { ethers } from "ethers";

const allStates = {
  "No State Selected": "",
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

interface StateData {
  [state: string]: string[];
}

const statesData: StateData = data;

const CreateListing = () => {
  const [UsState, setUsState] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("1");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { walletAddress } = useWalletContext();
  const didContext = useDidContext();
  let userDid: string;

  if (didContext) {
    userDid = didContext.userDid;
  }

  useEffect(() => {
    if (UsState && statesData[UsState]) {
      setCities(statesData[UsState]);
      setCity(statesData[UsState][0]);
      console.log(statesData[UsState]);
    } else {
      setCities([]);
    }
  }, [UsState]);

  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);

  const handlePriceEstimation = async (e: any) => {
    e.preventDefault();
    const price = await getEstimatedPrice(rooms, city, UsState);
    setEstimatedPrice(price);
    console.log(price);
  };

  const verifyAndGenerateNFT = async () => {};

  return (
    <div>
      <div>
        <div>
          <Button className="flex justify-center items-center rounded-full px-4 py-2 mt-8 ml-8">
            <ChevronLeft />
            <a href="/">Back</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 pb-4 text-center">
          <h3 className="md:text-4xl md:leading-normal text-2xl mt-8 md:mt-4 leading-normal font-semibold">
            List your property as NFT
          </h3>
        </div>
      </div>

      <div className="mx-auto container text-center flex flex-col flex-wrap items-center">
        <h3 className="text-xl font-bold text-center my-4">
          Enter Property Details
        </h3>
        <form className="grid grid-rows-6 gap-4 md:w-[70%] w-full items-center justify-center">
          <div className="grid grid-cols-2 items-center w-full">
            <label htmlFor="state" className="col-span-1 text-left">
              Enter the State
            </label>
            <select
              className="bg-secondary py-2 px-4 col-span-1"
              onChange={(e) => setUsState(e.target.value)}
              id="state"
            >
              {Array.from(Object.entries(allStates)).map(([s, c]) => (
                <option className="" key={s} value={c}>
                  {c ? `${s} - ${c}` : `${s}`}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 items-center w-[100%]">
            <label className="col-span-1 text-left">Enter the City</label>
            <select
              onChange={(e) => setCity(e.target.value)}
              className="bg-secondary py-2 px-4 col-span-1"
              defaultValue={cities[0]}
            >
              {cities.length > 0 ? (
                cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))
              ) : (
                <option>-----------------</option>
              )}
            </select>
          </div>
          <div className="grid grid-cols-2 items-center w-full">
            <label htmlFor="rooms" className="col-span-1 text-left">
              Enter the number of Bedrooms
            </label>
            <select
              onChange={(e) => setRooms(e.target.value)}
              className="bg-secondary py-2 px-4 col-span-1"
              defaultValue={"1"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="grid grid-cols-2 items-center w-full">
            <label htmlFor="rooms" className="col-span-1 text-left">
              Enter your name
            </label>
            <Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-secondary py-2 px-4 col-span-1"
            />
          </div>
          <div className="grid grid-cols-2 items-center w-full">
            <label htmlFor="rooms" className="col-span-1 text-left">
              Enter your email
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-secondary py-2 px-4 col-span-1"
            />
          </div>
          <div className="grid grid-cols-2 items-center w-full">
            <label htmlFor="rooms" className="col-span-1 text-left">
              Enter the address
            </label>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="bg-secondary py-2 px-4 col-span-1"
            />
          </div>

          {estimatedPrice > 0 && (
            <>
              <p>
                Estimated Price of NFT based on Location and Number of Rooms:
                {" $"}
                {estimatedPrice}
              </p>

              <Button
                className="w-[40%] mx-auto"
                onClick={verifyAndGenerateNFT}
              >
                Proceed to create NFT
              </Button>
            </>
          )}

          <Button onClick={handlePriceEstimation} className="w-[40%] mx-auto">
            Estimate Price
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
