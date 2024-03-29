import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function UserAvatar({
	name,
	image,
	className,
}: {
	name?: string | null;
	image?: string | null;
	className?: string;
}) {
	return (
		<Avatar className={cn("bg-white text-black ", className)}>
			{image && <Image src={image} alt={name || "User name"} width={40} height={40} className="rounded-full" />}
			<AvatarImage src="https://github.com/shadcn.png" />
			<AvatarFallback className="dark:bg-white">
				{name
					?.split(" ")
					.map((n) => n[0])
					.join("")}
			</AvatarFallback>
		</Avatar>
	);
}
