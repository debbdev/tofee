import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function page() {
  return (
    <div>
      <Card>
        <CardContent>
          <h2 className="py-2 text-xl">Send Message to Support</h2>

          <Button variant={"outline"} className="cursor-pointer">
            FeeTrx Support
          </Button>
          <br />
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
