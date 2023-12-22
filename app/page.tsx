import Image from "next/image";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>Sample</div>
    </main>
  );
}
