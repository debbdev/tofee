import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function HistoryPage() {
  return (
    <div>
      <Button variant={"outline"} className="cursor-pointer">
        <Link href="https://feetrx.cc/" className=" block">
          History
        </Link>
      </Button>
    </div>
  );
}

export default HistoryPage;
