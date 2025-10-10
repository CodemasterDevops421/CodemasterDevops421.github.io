export function Footer() {
  return (
    <footer className="border-t py-6 text-sm text-muted-foreground">
      <div className="container flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Melam Chaitanya Kumar. All rights reserved.</p>
        <p className="flex justify-center gap-6">
          <a
            href="https://github.com/CodemasterDevops421"
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanyakumar"
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:melamchaitanyakumar@gmail.com" className="transition-colors hover:text-primary">
            melamchaitanyakumar@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
