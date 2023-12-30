"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const CreateListing = () => {
  return (
    <div>
      <div>
        <div>
          <Button className="flex justify-center items-center rounded-full px-4 py-2 mt-8 ml-8">
            <ChevronLeft />
            <a href="/">Back</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="md:text-4xl mb-4 md:leading-normal text-2xl leading-normal font-semibold">
            List your property as NFT
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
