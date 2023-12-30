import { Web5 } from "@web5/api";
import React, { SetStateAction, createContext } from "react";

interface IDidContext {
  web5: Web5 | null;
  userDid: string;
  setWeb5: React.Dispatch<SetStateAction<Web5 | null>>;
  setUserDid: React.Dispatch<SetStateAction<string>>;
}

export const DidContext = createContext<IDidContext | null>(null);
