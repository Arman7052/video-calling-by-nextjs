"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const roomCode = router.query || searchParams.get("roomCode") || null;

  return <div>{roomCode ? `Page for room ${roomCode}` : "Page"}</div>;
};

export default Page;
