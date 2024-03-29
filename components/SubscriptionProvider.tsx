"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
	const { data: session } = useSession();
	const setSubscription = useSubscriptionStore((state) => state.setSubscription);

	useEffect(() => {
		if (!session) {
			return;
		}
		return onSnapshot(
			subscriptionRef(session?.user.id),
			(snaphot) => {
				if (snaphot.empty) {
					console.log("User has NO subscription");
					//set No Subscription
					setSubscription(null);
					return;
				} else {
					console.log("User has subscription");
					//set subscription
					//original code looked like:
					//setSubscription(snaphot.docs[0].data());
					//My code:
					setSubscription(snaphot.docs[snaphot.docs.length - 1].data());
				}
			},
			(error) => {
				console.log("Error getting document", error);
			}
		);
	}, [session, setSubscription]);

	return <div>{children}</div>;
}

export default SubscriptionProvider;
