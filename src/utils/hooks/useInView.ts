import { type RefObject, useEffect, useState } from "react";

/** True while `ratio` of the element is inside the viewport. Toggles back off so reveals replay on every scroll-in. */
export default function useInView<T extends Element>(ref: RefObject<T | null>, ratio = 0.3) {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: ratio });
		observer.observe(element);
		return () => observer.disconnect();
	}, [ref, ratio]);

	return inView;
}
