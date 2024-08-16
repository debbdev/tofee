import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function SupportPage() {
  return (
    <div>
      <Card>
        <CardContent>
          <h2 className="py-2 text-xl">Send Message to Support</h2>

          <Button variant={"outline"} className="cursor-pointer">
            <Link href="https://t.me/FeeTrxOfficial" className="mt-2 block">
              FeeTrx Support
            </Link>
          </Button>
          <br />
        </CardContent>
      </Card>
    </div>
  );
}

export default SupportPage;
