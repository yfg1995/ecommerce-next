import { Container } from "@/components/Container";
import ProductReel from "@/components/Products/ProductReel";
import { Button, buttonVariants } from "@/components/ui/Button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam. Explicabo voluptatum adipisci perferendis vel.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptates a exercitationem quod, repellendus blanditiis quo quae amet harum! Eaque tenetur odio eius consequatur vel!",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed et accusamus illo temporibus! Magni, reiciendis!",
  },
];

export default function Home() {
  return (
    <>
      <Container>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Homepage Heading
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            magnam placeat quisquam, asperiores voluptatem officiis, sint
            sapiente, animi voluptatibus quo saepe eligendi odio? Dolor at,
            magnam in doloremque aut ipsum!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>

            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          title="Brand new"
          href="/products"
          query={{ sort: "desc", limit: 4 }}
        />
      </Container>

      <section className="border-t border-gray-200 bg-gray-50">
        <Container className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
