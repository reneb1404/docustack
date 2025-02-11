import { AlignLeft, Bell, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="navbar bg-base-200 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<AlignLeft className="size-5" />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link href="/shelves">Regale</Link>
						</li>
						<li>
							<Link href="/docs">Dokumentationen</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<Link href="/" className="btn btn-ghost text-xl">
					Doc-U-Stack
				</Link>
			</div>
			<div className="navbar-end">
				<button className="btn btn-ghost btn-circle">
					<Search className="size-5" />
				</button>
				<button className="btn btn-ghost btn-circle">
					<Bell className="size-5" />
				</button>
			</div>
		</div>
	);
}
