import Link from "next/link";
import { AuditIcon, DiscordIcon } from "./svgs";
import { BugIcon, GithubIcon, LightbulbIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="shadow-surface-1 bottom-0 z-10 flex w-full flex-col items-center justify-between border-t border-solid border-border bg-background bg-opacity-95 shadow-2xl backdrop-blur-sm sm:fixed sm:flex-row">
      <div className="flex flex-1">
        <FooterLink href="/feedback" icon={<LightbulbIcon size={16} />}>
          Leave feedback
        </FooterLink>
        <FooterLink href="/bugs" icon={<BugIcon size={16} />}>
          Found a bug?
        </FooterLink>
      </div>

      <div className="flex text-gray-500 flex-1 items-center justify-center">
        <SocialLink
          href="#"
          icon={<DiscordIcon />}
          label="Join us on Discord"
        />
        <SocialLink
          href="#"
          icon={<TwitterIcon size={16} />}
          label="Join us on X"
        />
        <SocialLink
          href="#"
          icon={<GithubIcon size={16} />}
          label="Visit Github"
        />
      </div>

      <div className="flex flex-1 justify-end">
        <FooterLink href="#" icon={<AuditIcon />}>
          Audited by yAudit
        </FooterLink>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 hover:text-white h-8 text-xs gap-2 rounded-none px-[10px] text-gray-500"
    >
      {icon}
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 text-xs rounded-none px-[10px] text-muted-foreground"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
