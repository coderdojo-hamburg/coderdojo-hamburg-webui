import Link from "next/link"

export interface MyDrupalMenuItem {
  title: string;
  url: string;
 id: string;
}


interface FooterProps {
  links: MyDrupalMenuItem[]
}

export function Footer({ links }: FooterProps) {
  return (
    <footer className="border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p className="mb-6 md:mb-0">
            
          </p>
          {links?.length ? (
            <ul className="flex gap-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} passHref>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
