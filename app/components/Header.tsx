import Link from "next/link";

export function Header() {
  return (
    <header className="fixed z-10 w-full">
      <div className="flex h-full min-h-12 w-full items-center justify-between gap-2 border-b border-solid border-border bg-background bg-opacity-95 pr-2 backdrop-blur-sm">
        <div className="flex h-12">
          <Link href="/" className="flex items-center px-4" aria-label="Home">
            <div className="w-[32px] text-foreground">
              <svg
                viewBox="0 0 285 216"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M201.133 3.66666C197.933 5.13333 193.4 8.46666 191 11C188.6 13.4 183.8 16.8667 180.2 18.4667C172.2 22.3333 164.2 30.0667 160.867 37.4C157.4 45.1333 157.533 48.2 161.4 47.2667C167.8 45.6667 183.267 45 187 46.0667C189.533 46.7333 191.133 48.2 191.4 49.9333C191.8 52.2 190.067 53.6667 182.733 57.5333C163.533 67.8 135.4 96.6 114.2 127.933C106.067 139.933 101.4 145.4 94.3333 151C69.8 170.6 37 189.133 7.26665 200.333C3.79999 201.667 0.599988 203.133 0.333321 203.8C-2.33335 207.933 48.2 205.933 72.3333 201C89 197.533 113.8 189.267 128.733 182.333C138.2 177.933 162.467 170.333 167.4 170.333C168.067 170.333 168.467 175 168.467 180.733C168.333 190.733 168.467 191.4 173.533 198.733C176.467 202.867 178.467 206.6 178.2 206.733C177.933 207 165.533 207.8 150.6 208.6C117.933 210.2 113 212.2 137.933 213.8C175.667 216.333 285 214.733 285 211.667C285 210.067 276.067 209.133 251.533 208.333C238.867 207.8 227 207.267 225.4 206.867C223.4 206.467 219.533 202.067 214.2 194.2C205.267 180.867 205 179.533 207.533 163.667C208.333 158.867 209 154.6 209 154.067C209 153.533 213 150.467 218.067 147.267C235.533 135.933 248.6 119.8 254.6 102.6C258.733 90.4667 258.867 65.4 254.733 50.3333C250.6 35.5333 241.8 15.9333 236.733 10.6C227.667 1.13333 213.133 -1.66667 201.133 3.66666Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
          <div className="flex h-full items-center">
            <NavLink href="/portfolio" icon={<BriefcaseIcon />}>
              Portfolio
            </NavLink>
            <NavLink href="/yield" icon={<YieldIcon />} active>
              Yield
            </NavLink>
            <NavLink href="/swap" icon={<SwapIcon />}>
              Swap
            </NavLink>
            <NavLink href="/tokens" icon={<CoinsIcon />}>
              Tokens
            </NavLink>
            <NavLink href="/lending-markets" icon={<LandmarkIcon />}>
              Lending
            </NavLink>
            <NavLink href="/stats" icon={<ChartIcon />}>
              Stats
            </NavLink>
          </div>
        </div>
        <div className="flex w-full justify-end gap-2">
          <div className="flex items-center gap-2">
            <ConnectWalletButton />
            <SettingsButton />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

// Helper Components
function NavLink({
  href,
  children,
  icon,
  active,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`focus-visible:ring-ring justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 flex items-center gap-2 h-full rounded-none pr-4 ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}

function ConnectWalletButton() {
  return (
    <button className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-9 px-4 py-2 gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
      Connect Wallet
    </button>
  );
}

function SettingsButton() {
  return (
    <button className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-foreground">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    </button>
  );
}

function ThemeToggle() {
  return (
    <button className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground text-foreground h-9 w-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
}

// Icons
const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12h.01" />
    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const YieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 14V4.5a2.5 2.5 0 0 0-5 0V14" />
    <path d="m8 8 6-5 8 6" />
    <path d="M20 4v10" />
    <rect width="4" height="4" x="12" y="10" />
    <path d="M2 14h20" />
    <path d="m2 22 5-8" />
    <path d="m7 22 5-8" />
    <path d="M22 22H12l5-8" />
    <path d="M15 18h7" />
  </svg>
);

// Add other icon components similarly...
