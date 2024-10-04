import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { faq } from "@/constants";

function FrequentlyAskedQuestion() {
  return (
    <div className="flex-between mx-auto max-w-screen-sm flex-wrap gap-10 px-10 pb-16 pt-32  sm:max-w-screen-sm lg:max-w-screen-xl">
      {faq.map((faqItem) => (
        <Card
          key={faqItem.id}
          className="text-dark100_light900 background-light900_dark200 max-w-screen-sm py-3 sm:max-w-screen-sm lg:max-w-screen-xl"
        >
          <CardContent className="">
            <div className="max-w-screen-sm sm:max-w-screen-sm lg:max-w-[500px]">
              <h1 className="text-xl font-bold">{faqItem.title}</h1>
              <p className="mt-3 w-full">{faqItem.body}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FrequentlyAskedQuestion;
