"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FAQ } from "@/types";

function FrequentlyAskedQuestion() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      const response = await fetch("/api/faqs");
      const data: FAQ[] = await response.json();
      setFaqs(data);
    };

    fetchFAQs();
  }, []);

  return (
    <div className="flex-between mx-auto max-w-screen-sm flex-wrap gap-10 px-10 pb-16 pt-32 sm:max-w-screen-sm lg:max-w-screen-xl">
      {faqs.map((faq) => (
        <Card
          key={faq.id}
          className="text-dark100_light900 background-light900_dark200 max-w-screen-sm py-3 sm:max-w-screen-sm lg:max-w-screen-xl"
        >
          <CardContent>
            <div className="max-w-screen-sm sm:max-w-screen-sm lg:max-w-[500px]">
              <h1 className="text-xl font-bold">{faq.title}</h1>
              <p className="mt-3 w-full">{faq.body}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FrequentlyAskedQuestion;
