import Link from "next/link";
import Container from "./ui/Container";
import Navigation from "./Navigation";
import getCategories from "@/actions/get-cateogries";
import NavActions from "./NavActions";
import getStore from "@/actions/get-store";

// so that is not cached and when we add a category on normal refresh it will show up, otherwise we needed to hard refresh
export const revalidate = 0;

export default async function Header() {
  const categories = await getCategories();
  const store = await getStore();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store {store.name}</p>
          </Link>
          <Navigation data={categories} />
          <NavActions />
        </div>
      </Container>
    </div>
  );
}
