"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useUrlHash = () => {
	const [hash, setHash] = useState<string | null>();
	const searchParams = useSearchParams();

	useEffect(() => {
		setHash(window.location.hash);
	}, [searchParams]);

	return hash;
};
