import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
	mathcer: ["/chat", "/chat/:id*", "/register"],
};
