'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between w-full">
        {/* ブランドロゴ/名前 */}
        <div className="flex items-center space-x-2">
          <Link className="mr-6 ml-8 flex items-center space-x-2" href="/">
            <span className="font-bold">INIAD-TimeTable-Share</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/products' ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
              href="/products"
            >
              商品一覧
            </Link>
            <Link
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/services' ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
              href="/services"
            >
              サービス
            </Link>
            <Link
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/about' ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
              href="/about"
            >
              会社概要
            </Link>
            <Link
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/contact' ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
              href="/contact"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
        {/* ユーザーメニュー */}
        <div className="flex items-center justify-end mr-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="ユーザー" src="/placeholder.svg" />
                  <AvatarFallback>ユ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>プロフィール</DropdownMenuItem>
              <DropdownMenuItem>注文履歴</DropdownMenuItem>
              <DropdownMenuItem>お気に入り</DropdownMenuItem>
              <DropdownMenuItem>設定</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>ログアウト</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
