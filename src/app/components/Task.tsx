"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data: {
  parent: {
    heading: string;
    Time: {
      heading: string;
      NineDigit: {
        heading: string;
        url: string;
      }[];
    };
  };
}[] = [
  {
    parent: {
      heading: "Space Data",
      Time: {
        heading: "Time",
        NineDigit: [
          {
            heading: "20220201",
            url: "https://example.com/00000.csv",
          },
          {
            heading: "20220202",
            url: "https://example.com/00000.csv",
          },
        ],
      },
    },
  },
];

const Task = () => {
  return (
    <div className="flex flex-col gap-10">
      <Accordion type="single" collapsible className="w-full">
        {data.map((singleItem, idx) => {
          return (
            <Card className="h-full" key={idx}>
              <CardContent className="pt-6">
                <AccordionItem value={`singleItem_${idx}`}>
                  <AccordionTrigger>
                    {singleItem.parent.heading}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible className="w-full">
                      <Card className="h-full" key={idx}>
                        <CardContent className="pt-6">
                          <AccordionItem value={`singleTime_${idx}`}>
                            <AccordionTrigger>
                              {singleItem.parent.Time.heading}
                            </AccordionTrigger>
                            <AccordionContent>
                              <Accordion
                                type="multiple"
                                className="w-full space-y-4"
                              >
                                {singleItem.parent.Time.NineDigit.map(
                                  (nd, index) => {
                                    return (
                                      <Card className="h-full" key={index}>
                                        <CardContent className="pt-6">
                                          <AccordionItem value={`nd_${index}`}>
                                            <AccordionTrigger>
                                              {nd.heading}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                              {nd.url}
                                            </AccordionContent>
                                          </AccordionItem>
                                        </CardContent>
                                      </Card>
                                    );
                                  }
                                )}
                              </Accordion>
                            </AccordionContent>
                          </AccordionItem>
                        </CardContent>
                      </Card>
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Task;
