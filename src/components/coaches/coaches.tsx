"use client";

import React from "react";
import { SectionHeader } from "@/components/reusable/sectionHeader";
import Image, { StaticImageData } from "next/image";
import kath from "../../../public/kath.avif";
import jax from "../../../public/jax.avif";
import { MainWrapper } from "@/components/wrapper/mainWrapper";

export default function MeetYourCoaches() {
  return (
    <MainWrapper className="text-gray-600 body-font" id="coaches">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Header */}
        <SectionHeader
          title={"MEET YOUR COACHES"}
          description={"Expert Guidance to Empower You"}
        />
        {/* Coach Cards */}
        <div className="flex flex-wrap -m-4">
          <CoachCard
            name="Katherine Heath"
            role="Transformational Coach"
            description="Katherine works with individuals across age groups to build self-knowledge as a foundation for purposeful living. Passionate about coaching teenagers and young adults, she helps build inner resilience and strengthen mental health through enhanced communication and self-awareness."
            imgSrc={kath}
          />
          <CoachCard
            name="Jax Hickey"
            role="Parenting & Family Coach"
            description="Jax leverages personal experience and professional expertise to support parents navigating the challenges of raising tweens and teens. Her approach emphasizes healthy boundaries and effective communication, ensuring families connect and grow stronger together."
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
          <p className="leading-relaxed text-base">{description}</p>
          {/*<Button*/}
          {/*  variant="link"*/}
          {/*  className="mt-3 text-primary inline-flex items-center"*/}
          {/*>*/}
          {/*  Learn More*/}
          {/*  <ArrowRight className="w-4 h-4 ml-2" />*/}
          {/*</Button>*/}
        </div>
      </div>
    </div>
  );
}
