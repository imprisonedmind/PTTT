"use client";

import React from "react";
import { SectionHeader } from "@/components/reusable/sectionHeader";
import Image, { StaticImageData } from "next/image";
import kath from "../../../public/kath.avif";
import jax from "../../../public/jax.avif";
import { MainWrapper } from "@/components/wrapper/mainWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { networkUrl } from "@/lib/utils";

export default function MeetYourCoaches() {
  return (
    <MainWrapper className="text-gray-600 body-font" id="coaches">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Header */}
        <SectionHeader
          // title={"KATH AND JAX"}
          description={"Meet your Coaches"}
        />
        {/* Coach Cards */}
        <div className="flex flex-wrap -m-4">
          <CoachCard
            name="Katherine Heath"
            role="Professional Integral Coach"
            description="Katherine is a professional integral coach, with a passion for collaborating with people who have the courage and compassion to take responsibility for building the life they choose, and a willingness to consider various possibilities to find balance and meaning. She believes that self-knowledge is a foundational life skill.  Self-knowledge is developed through exploring current habits and behavioural patterns, and noticing emotional responses and triggers to everyday life events and relationships. This process of building the muscle of self-correction develops resilience and strengthens mental health, while working towards personal coaching goals and outcomes. Coaching is therefore a powerful way to foster self awareness and enhance one’s capacity to face obstacles with strength and confidence. It is both about prioritising the self, as well as taking responsibility for who we are in the world."
            imgSrc={kath}
          />
          <CoachCard
            name="Jax Hickey"
            role="Parenting & Family Coach"
            description="Jax leverages personal experience and professional expertise to support parents navigating the challenges of raising Tweens and Teens. Her approach emphasizes healthy boundaries and effective communication, ensuring families connect and grow stronger together."
            imgSrc={jax}
          />
        </div>
      </div>
    </MainWrapper>
  );
}

interface CoachCardProps {
  name: string;
  role: string;
  description: string;
  imgSrc: StaticImageData;
}

function CoachCard({ name, role, description, imgSrc }: CoachCardProps) {
  return (
    <div className="p-4 md:w-1/2">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        {/* Icon & Name */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white">
            <Image
              src={imgSrc}
              alt={"Parenting The Teen Tribe"}
              className="h-full w-full rounded-full"
            />
          </div>
          <div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              {name}
            </h2>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        {/* Description & Link */}
        <div className="flex-grow">
          <p className="leading-relaxed text-base line-clamp-4 overflow-ellipsis">
            {description}
          </p>
          <Link href={networkUrl} target={"_blank"}>
            <Button
              variant="link"
              className="mt-3 text-primary inline-flex items-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
