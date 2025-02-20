import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
// import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SearchBox from "../post/SearchBox";
export default function PublicHeader() {
  return (
    <div>
      <header className="border-b bg-blue-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* ナビ */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="font-bold text-xl">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* 検索 */}
          <div className="flex items-center gap-4">
            {/* <Input
              placeholder="記事を検索..."
              className="w-[200px] lg:w-[300px]"
            /> */}
            <SearchBox />
            <Button variant="outline" asChild>
              <Link href="/login">ログイン</Link>
            </Button>
            <Button asChild>
              <Link href="/register">登録</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
