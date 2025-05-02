"use client";

import {
  AccountCircle as AccountCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Group as GroupIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const router = useRouter();

  // ログインページに遷移する関数
  const handleNavigateToLogin = () => {
    router.push("/login");
  };

  const features = [
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: "クラスメイト確認",
      description: "同じ授業の受講者を簡単に確認できます。",
    },
    {
      icon: <AccountCircleIcon sx={{ fontSize: 40 }} />,
      title: "プロフィール管理",
      description: "自分の情報を簡単に管理できます。",
    },
  ];

  return (
    <Box sx={{ bgcolor: "white" }}>
      {/* ヒーローセクション */}
      <Box
        sx={{
          bgcolor: "hsl(210 100% 97%)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {/* 左側のテキストコンテンツ */}
            <Box
              sx={{ width: { xs: "100%", md: "50%" }, mb: { xs: 4, md: 0 } }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  color: "hsl(240 6% 10%)",
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                もっと簡単に
                <br />
                もっとスマートに
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 400,
                  color: "hsl(240 3.8% 46.1%)",
                  mb: 4,
                  lineHeight: 1.5,
                }}
              >
                一緒に授業を受ける仲間を簡単に見つけよう
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNavigateToLogin}
                  sx={{
                    bgcolor: "hsl(240 6% 10%)",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: "0.5rem",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    "&:hover": {
                      bgcolor: "hsl(240 6% 20%)",
                    },
                  }}
                >
                  今すぐ始める
                </Button>
              </Box>
            </Box>

            {/* 右側の画像 */}
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                component="img"
                src="/landing/image.jpeg"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "1rem",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              />
            </Box>
          </Box>
        </Container>

        {/* 装飾的な背景要素 */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, hsla(210, 100%, 80%, 0.2), hsla(240, 100%, 80%, 0.2))",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, hsla(210, 100%, 80%, 0.1), hsla(240, 100%, 80%, 0.1))",
            zIndex: 0,
          }}
        />
      </Box>

      {/* 特徴セクション */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "hsl(240 6% 10%)",
              mb: 2,
            }}
          >
            主な機能
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "hsl(240 3.8% 46.1%)",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            学生生活をより便利に、より充実したものにするための機能を提供します
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={`feature-${feature.title}`}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                flexGrow: 1,
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: "0.75rem",
                  border: "1px solid hsl(240 5.9% 90%)",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredFeature === index ? "translateY(-8px)" : "none",
                  boxShadow:
                    hoveredFeature === index
                      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      : "none",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "0.75rem",
                      bgcolor: "hsl(210 100% 97%)",
                      color: "hsl(210 100% 50%)",
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "hsl(240 6% 10%)",
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "hsl(240 3.8% 46.1%)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* スクリーンショットセクション */}

      {/* プロフィールセクション */}

      {/* CTAセクション */}
      <Box
        sx={{
          bgcolor: "hsl(240 6% 10%)",
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <SchoolIcon sx={{ fontSize: 60, mb: 3, opacity: 0.9 }} />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 3,
            }}
          >
            今すぐ始めましょう
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              opacity: 0.9,
              mb: 4,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            無料アカウントを作成して、学生生活をもっと便利に、もっと充実したものにしましょう。
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleNavigateToLogin}
              sx={{
                bgcolor: "white",
                color: "hsl(240 6% 10%)",
                px: 4,
                py: 1.5,
                borderRadius: "0.5rem",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  bgcolor: "hsl(0 0% 90%)",
                },
              }}
            >
              アカウント作成
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleNavigateToLogin}
              sx={{
                borderColor: "white",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: "0.5rem",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              ログイン
            </Button>
          </Box>
        </Container>
      </Box>

      {/* フッター */}
    </Box>
  );
}
