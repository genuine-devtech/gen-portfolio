const navLinks = [
  {label: "Work", href: "#work"},
  {label: "Projects", href: "#projects"},
  {label: "Services", href: "#services"},
  {label: "Stack", href: "#stack"},
  {label: "About", href:"#about"},
  {label: "Contact", href:"#contact"},
];

export default function Home() {
  return (
    <div className = "flex min-h-screen">
      <aside className = "hidden w-56 shrink-0 border-r boder-boder md:block">
        <div className = "sticky top-0 flex h-screen flex-col gap-6 p-6 text-sm">
          <a href="#top" className="text-foreground">
            Genuine Espiritu
          </a>

          <nav className = "flex flex-col gap-2.5 text-muted">
            {navLinks.map((link) => (
              <a key = {link.href} href= {link.href} className= "hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          </div>"
      </aside>

      {/* Main content */}
      <main className = "flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
          <p className = "text-muted">Main content goes here. </p>
        </div>
      </main>
    </div>
  );
}
