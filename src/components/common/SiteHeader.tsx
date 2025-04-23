"use client";

import { authClient } from "@/lib/auth-client";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";

export const SiteHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  // ユーザーメニューの状態管理
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
        },
      },
    });
  };

  // リンクのスタイル関数
  const getLinkStyle = (path: string) => ({
    color: pathname === path ? "text.primary" : "text.secondary",
    fontWeight: pathname === path ? "bold" : "medium",
    textDecoration: "none",
    transition: "color 0.2s",
    fontSize: "0.875rem",
    "&:hover": {
      color: "text.primary",
      opacity: 0.8,
    },
  });

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NextLink href="/dashboard" passHref>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                ml: 2,
                mr: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              INIAD-TimeTable-Share
            </Typography>
          </NextLink>

          <Box sx={{ display: "flex", gap: 3 }}>
            <NextLink href="/products" passHref>
              <Box sx={getLinkStyle("/products")}>商品一覧</Box>
            </NextLink>
            <NextLink href="/services" passHref>
              <Box sx={getLinkStyle("/services")}>サービス</Box>
            </NextLink>
            <NextLink href="/about" passHref>
              <Box sx={getLinkStyle("/about")}>会社概要</Box>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Box sx={getLinkStyle("/contact")}>お問い合わせ</Box>
            </NextLink>
          </Box>
        </Box>

        <Box sx={{ mr: 2 }}>
          <Button
            id="avatar-button"
            aria-controls={open ? "avatar-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              minWidth: 0,
              p: 0.5,
              borderRadius: "50%",
            }}
          >
            <Avatar
              src="/placeholder.svg"
              alt="ユーザー"
              sx={{ width: 32, height: 32 }}
            >
              ユ
            </Avatar>
          </Button>
          <Menu
            id="avatar-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "avatar-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                router.push("/profile");
              }}
            >
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText>プロフィール</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>ログアウト</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
