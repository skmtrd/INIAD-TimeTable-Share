"use client";

import { useAuthUserSWR } from "@/hooks/data/useAuthUserSWR";
import { authClient } from "@/lib/auth-client";
import { Logout, School } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  CircularProgress,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";

export const SiteHeader = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const open = Boolean(anchorEl);
  const { authUser } = useAuthUserSWR();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
    setIsLoading(false);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid hsl(240 5.9% 90%)",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            height: { xs: 64, md: 72 },
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NextLink
              href={`/profile/${authUser?.id}`}
              passHref
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <School
                sx={{
                  color: "hsl(210 100% 50%)",
                  fontSize: { xs: 24, sm: 28 },
                  mr: 1.5,
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, hsl(210 100% 50%), hsl(240 100% 65%))",
                  WebkitBackgroundClip: "text",
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  letterSpacing: "-0.01em",
                  display: { xs: "none", sm: "block" },
                }}
              >
                TimeTable-Share
              </Typography>
            </NextLink>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              id="avatar-button"
              aria-controls={open ? "avatar-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                p: 0.5,
                borderRadius: "50%",
                backgroundColor: "white",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "hsl(210 100% 70%)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Avatar
                src={authUser?.image || ""}
                sx={{
                  width: { xs: 32, sm: 36 },
                  height: { xs: 32, sm: 36 },
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              />
            </IconButton>
            <Menu
              id="avatar-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "avatar-button",
                dense: isMobile,
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              slotProps={{
                paper: {
                  elevation: 2,
                  sx: {
                    mt: 1.5,
                    minWidth: 180,
                    overflow: "visible",
                    borderRadius: "0.5rem",
                    border: "1px solid hsl(240 5.9% 90%)",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                      borderTop: "1px solid hsl(240 5.9% 90%)",
                      borderLeft: "1px solid hsl(240 5.9% 90%)",
                    },
                  },
                },
              }}
            >
              <MenuItem
                onClick={handleSignOut}
                sx={{
                  py: 1.5,
                  "&:hover": { bgcolor: "hsl(210 100% 97%)" },
                }}
              >
                <ListItemIcon>
                  {isLoading ? (
                    <CircularProgress
                      size={18}
                      sx={{ color: "hsl(210 100% 50%)" }}
                    />
                  ) : (
                    <Logout
                      fontSize="small"
                      sx={{ color: "hsl(210 100% 50%)" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary="ログアウト"
                  primaryTypographyProps={{
                    sx: { fontWeight: 600 },
                  }}
                />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
