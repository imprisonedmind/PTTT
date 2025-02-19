import {Button} from "@/components/ui/button";

export default function Navbar() {
	return (
		<div
			className="sticky top-0 items-center flex flex-row justify-between w-full drop-shadow p-4 bg-white z-[500]">
			<div className="flex flex-row gap-2 items-center">
				<h1 className="font-bold text-3xl w-[210px]">PTT</h1>
			</div>

			<ul className="flex flex-row gap-4">
				<li>Features</li>
				<li>Meet your Coaches</li>
				<li>Pricing</li>
			</ul>

			<div className={"flex flex-row gap-4 w-[210px]"}>
				<Button variant={"secondary"}>
					Contact
				</Button>
				<Button variant={"default"}>
					Get Started
				</Button>
			</div>
		</div>
	);
};