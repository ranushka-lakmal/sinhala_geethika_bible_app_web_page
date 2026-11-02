import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function PrivacyPolicyPage() {
  redirect(siteConfig.privacyPolicyUrl);
}
