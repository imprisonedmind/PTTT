import Image from "next/image";
import kath from "../../../public/kath.avif";
import jax from "../../../public/jax.avif";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Hero() {
	return (
		<div>
			<div
				className="flex items-center w-full text-white py-44 bg-primary relative overflow-clip">

				{/*<div*/}
				{/*	className="bg-primary min-h-96 w-96 scale-[2.8] absolute bottom-0 left-1/2 rounded-full -translate-x-[50%] translate-y-[50%] z-30"/>*/}
				{/*<div*/}
				{/*	className="bg-secondary min-h-96 w-96 scale-[3.5] absolute bottom-0 left-1/2 rounded-full -translate-x-[50%] translate-y-[50%] z-20"/>*/}
				{/*<div*/}
				{/*	className="bg-tertiary min-h-96 w-96 scale-[4.2] absolute bottom-0 left-1/2 rounded-full -translate-x-[50%] translate-y-[50%] z-10"/>*/}
				{/*<div*/}
				{/*	className="bg-quaternary min-h-96 w-96 scale-[4.8] absolute bottom-0 left-1/2 rounded-full -translate-x-[50%] translate-y-[50%]"/>*/}

				<div
					className="flex flex-col gap-8 max-w-[700px] justify-center items-center mx-auto z-50">

					<div className="relative">
						<Image
							src={kath}
							alt={"Parenting The Teen Tribe"}
							className="h-44 w-44 rounded-full border-2 border-white absolute top-0 left-0"
						/>
						<Image
							src={jax}
							alt={"Parenting The Teen Tribe"}
							className="h-44 w-44 rounded-full border-2 border-white ml-28 "
						/>
					</div>


					<div className="flex-col flex gap-2 text-center">
						<h2 className="font-bold text-5xl">Parenting The Teen Tribe</h2>

						<p className="text-2xl">Join our supportive network to navigate the transitional years of parenting tweens and teens together.</p>
					</div>

					<div className="flex flex-row gap-4">
						<Link href={"https://paystack.com/pay/nuwmul4t7o"} target={"_blank"}>
							<Button variant={"secondary"} size={"lg"}>
								Sign in to join the Tribe
							</Button>
						</Link>

						{/*<Link href={"https://paystack.com/pay/nuwmul4t7o"} target={"_blank"}>*/}
						{/*	<Button variant={"secondary"} size={"lg"}>*/}
						{/*		Go to the Network*/}
						{/*	</Button>*/}
						{/*</Link>*/}
					</div>


				</div>

			</div>
		</div>
	);
};