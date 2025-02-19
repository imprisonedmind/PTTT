import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import PricingMain from "@/components/pricing/pricingMain";
import Footer from "@/components/footer/footer";
import Features from "@/components/features/features";
import MeetYourCoaches from "@/components/coaches/coaches";

export default function Home() {
	return (
		<main className={`mx-auto bg-white`}>

			<div className="flex flex-col w-full">
				<Navbar/>
				<Hero/>
				<Features/>
				<PricingMain/>
				<MeetYourCoaches/>
				<Footer/>
			</div>
		</main>
	);
};

{/*<MainWrapper className="py-32 flex flex-col gap-16">*/
}
{/*	<div className="flex flex-row gap-8 items-center">*/
}
{/*		<div className="h-72 w-auto aspect-square bg-zinc-100 flex flex-shrink-0 object-fill">*/
}
{/*			<Image src={placeHolder} alt={"placeholder for course"} className="w-full h-full"/>*/
}
{/*		</div>*/
}

{/*		<div className="flex flex-col gap-2">*/
}
{/*			<h3 className="font-bold text-2xl">Why Parenting The Teen Tribe?</h3>*/
}
{/*			<p className="text-xl leading-8">Our aim is to hold each other in the process of exploring a range of parenting styles, coaching techniques and practical tools to engage and communicate with our Tweens and Teens to build stronger connections and to show up more frequently as the parents we want to be.</p>*/
}
{/*		</div>*/
}
{/*	</div>*/
}

{/*	<div className="flex flex-row-reverse gap-8 items-center">*/
}
{/*		<div className="h-72 w-auto aspect-square bg-zinc-100 flex flex-shrink-0 object-fill">*/
}
{/*			<Image src={placeHolder} alt={"placeholder for course"} className="w-full h-full"/>*/
}
{/*		</div>*/
}

{/*		<div className="flex flex-col gap-2">*/
}
{/*			<h3 className="font-bold text-2xl">The Results You&#39;ll Get</h3>*/
}
{/*			<p className="text-xl leading-8">Our course and community are pretty special. We're focused on ways of making a significant difference in your and your family's life.</p>*/
}
{/*		</div>*/
}
{/*	</div>*/
}
{/*</MainWrapper>*/
}