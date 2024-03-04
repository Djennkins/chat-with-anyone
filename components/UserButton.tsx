"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./LoadingSpinner";
import { StarIcon } from "lucide-react";

function UserButton({ session }: { session: Session | null }) {
	const subscription = useSubscriptionStore((state) => state.subscription);

	if (!session)
		return (
			<Button variant={"outline"} onClick={() => signIn()}>
				Sign In
			</Button>
		);

	return (
		session && (
			<DropdownMenu>
				<DropdownMenuTrigger>
					<UserAvatar image={session.user?.image} name={session.user?.name} />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
					<DropdownMenuSeparator />

					{subscription === undefined && (
						<DropdownMenuItem>
							<LoadingSpinner />
						</DropdownMenuItem>
					)}

					{subscription?.role === "pro" && (
						<>
							<DropdownMenuLabel
								className=" text-xs flex items-center justify-center space-x-1 
							 text-[#E935C1] animate-pulse"
							>
								<StarIcon fill="#E935C1" />
								<p>PRO</p>
							</DropdownMenuLabel>

							<DropdownMenuSeparator />

							<DropdownMenuItem>
								Manage
								{/* {<ManageAccountButton} */}
							</DropdownMenuItem>
						</>
					)}

					<DropdownMenuItem
						onClick={() =>
							signOut({
								callbackUrl: "/",
							})
						}
					>
						Sign Out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	);
}

export default UserButton;
