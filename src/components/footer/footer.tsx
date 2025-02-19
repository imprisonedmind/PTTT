import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Hexagon } from "lucide-react"

export default function Footer() {
	return (
		<footer className="text-muted-foreground">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap md:text-left text-center order-first">
					{[1, 2, 3].map((index) => (
						<div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="font-medium text-foreground tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav className="list-none mb-10">
								{["First Link", "Second Link", "Third Link", "Fourth Link"].map((link) => (
									<li key={link}>
										<Link href="#" className="hover:text-foreground">
											{link}
										</Link>
									</li>
								))}
							</nav>
						</div>
					))}
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="font-medium text-foreground tracking-widest text-sm mb-3">SUBSCRIBE</h2>
						<div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
							<div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
								<label htmlFor="footer-field" className="leading-7 text-sm">
									Placeholder
								</label>
								{/*<Input*/}
								{/*	type="text"*/}
								{/*	id="footer-field"*/}
								{/*	name="footer-field"*/}
								{/*	className="w-full bg-muted/50 rounded border border-muted focus:bg-transparent focus:ring-2 focus:ring-primary focus:border-primary text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"*/}
								{/*/>*/}
							</div>
							<Button className="lg:mt-2 xl:mt-0 flex-shrink-0">Button</Button>
						</div>
						<p className="text-sm mt-2 md:text-left text-center">
							Bitters chicharrones fanny pack
							<br className="lg:block hidden" />
							waistcoat green juice
						</p>
					</div>
				</div>
			</div>
			<div className="bg-muted">
				<div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
					<Link
						href="#"
						className="flex title-font font-medium items-center md:justify-start justify-center text-foreground"
					>
						<Hexagon className="w-10 h-10 text-white p-2 bg-primary rounded-full" />
						<span className="ml-3 text-xl">Tailblocks</span>
					</Link>
					<p className="text-sm sm:ml-6 sm:mt-0 mt-4">
						© 2020 Tailblocks —
						<a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="ml-1" target="_blank">
							@knyttneve
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="#" className="text-muted-foreground">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="ml-3 text-muted-foreground">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="ml-3 text-muted-foreground">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="ml-3 text-muted-foreground">
              <Linkedin className="w-5 h-5" />
            </Link>
          </span>
				</div>
			</div>
		</footer>
	)
}

