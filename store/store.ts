import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported = "en" | "de" | "fr" | "es" | "hi" | "ja" | "la" | "ru" | "zh" | "ar" | "uk";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
	en: "English",
	de: "German",
	fr: "French",
	es: "Spanish",
	hi: "Hindi",
	ja: "Japanese",
	la: "Latin",
	ru: "Russian",
	zh: "Mandarin",
	ar: "Arabic",
	uk: "Ukrainian",
};

interface SubscriptionState {
	subscription: Subscription | null | undefined;
	setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
	subscription: undefined,
	setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
