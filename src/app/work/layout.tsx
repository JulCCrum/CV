import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jackpot Automations — Julian Crummedyo",
  description:
    "Building at the intersection of finance and technology. Software, AI systems, and automations that solve real problems.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
