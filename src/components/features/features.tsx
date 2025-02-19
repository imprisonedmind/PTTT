"use client";

import type React from "react";

import { ArrowRight, Calendar, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainWrapper } from "@/components/wrapper/mainWrapper";

export default function Features() {
  return (
    <MainWrapper>
      {/*<div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
      {/*	<h1*/}
      {/*		className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">Features</h1>*/}
      {/*	<p*/}
      {/*		className="mx-auto max-w-[700px] md:text-xl ">*/}
      {/*		What you&#39;ll get with us*/}
      {/*	</p>*/}
      {/*</div>*/}

      <div className="text-muted-foreground body-font">
        <div className="container px-5 py-24 mx-auto">
          <FeatureCard
            icon={<Heart className="w-10 h-10 sm:w-16 sm:h-16" />}
            title="Why Parenting The Teen Tribe?"
            description="Our aim is to hold each other in the process of exploring a range of parenting styles, coaching techniques and practical tools to engage and communicate with our Tweens and Teens to build stronger connections and to show up more frequently as the parents we want to be."
            reverse={false}
          />

          <FeatureCard
            icon={<Star className="w-10 h-10 sm:w-16 sm:h-16" />}
            title="The Results You'll Get"
            description="Our course and community are pretty special. We're focused on ways of making a significant difference in your and your family's life. Connect with other parents, learn from qualified coaches, gain new parenting strategies, and strengthen family relationships."
            reverse={true}
          />

          <FeatureCard
            icon={<Calendar className="w-10 h-10 sm:w-16 sm:h-16" />}
            title="When You Join Today"
            description="Get access to our TTT community, participate in fun polls, and start the six-module course on March 18th, 2025. Explore tools, skills, and mindsets to open up new lens thinking, greater self-awareness, and navigate these important years with curiosity, mindfulness, courage, and success."
            reverse={false}
          />

          <div className="flex justify-center mt-20">
            <Button
              size="lg"
              className="text-white bg-primary hover:bg-primary/90"
            >
              Join The Course
            </Button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  reverse,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  reverse: boolean;
}) {
  return (
    <div
      className={`flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 ${reverse ? "sm:flex-row-reverse flex-col" : "sm:flex-row flex-col"}`}
    >
      <div
        className={`sm:w-32 sm:h-32 h-20 w-20 ${reverse ? "sm:ml-10" : "sm:mr-10"} inline-flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0`}
      >
        {icon}
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-foreground text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        <Button
          variant="link"
          className="mt-3 text-primary inline-flex items-center"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
