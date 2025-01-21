import Link from "next/link";
import { AuditIcon, DiscordIcon } from "./svgs";
import { BugIcon, GithubIcon, LightbulbIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="shadow-surface-1 bottom-0 z-10 flex w-full flex-col items-center justify-between border-t border-solid border-border bg-background bg-opacity-95 shadow-2xl backdrop-blur-sm sm:fixed sm:flex-row">
      <div className="flex flex-1">
        <FooterLink
          href="https://vfat.canny.io/idea-box"
          icon={<LightbulbIcon />}
        >
          Leave feedback
        </FooterLink>
        <FooterLink href="https://vfat.canny.io/bugs" icon={<BugIcon />}>
          Found a bug?
        </FooterLink>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <SocialLink
          href="https://discord.gg/vfat"
          icon={<DiscordIcon />}
          label="Join us on Discord"
        />
        <SocialLink
          href="https://x.com/vfat_io"
          icon={<TwitterIcon />}
          label="Join us on X"
        />
        <SocialLink
          href="https://github.com/vfat-tools/vfat-tools"
          icon={<GithubIcon />}
          label="Visit Github"
        />
      </div>

      <div className="flex flex-1 justify-end">
        <FooterLink
          href="https://reports.yaudit.dev/reports/05-2024-Sickle-3"
          icon={<AuditIcon />}
        >
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
      target="_blank"
      className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 text-xs gap-2 rounded-none px-[10px] text-muted-foreground"
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
      target="_blank"
      className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 text-xs rounded-none px-[10px] text-muted-foreground"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
