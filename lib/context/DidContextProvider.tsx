"use client";
import { ReactNode, useState, useEffect } from "react";
import { DidContext } from "./DidContext";
import { Web5 } from "@web5/api";

export const DidContextProvider = ({ children }: { children: ReactNode }) => {
  const [web5, setWeb5] = useState<Web5 | null>(null);
  const [userDid, setUserDid] = useState<string>("");

  useEffect(() => {
    const initWeb5 = async () => {
      // @ts-ignore
      const { Web5 } = await import("@web5/api");

      try {
        const { web5, did } = await Web5.connect({ sync: "5s" });
        setWeb5(web5);
        setUserDid(did);
        console.log(web5);
        if (web5 && did) {
          console.log("Web5 initialized");
          // await configureProtocol(web5, did);
        }
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };

    initWeb5();
  });

  return (
    <DidContext.Provider value={{ web5, setWeb5, userDid, setUserDid }}>
      {children}
    </DidContext.Provider>
  );
};
