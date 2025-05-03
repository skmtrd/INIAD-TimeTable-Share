import { Container, Typography } from "@mui/material";
import type React from "react";
interface PageContainerProps {
  /**
   * ページのタイトル
   * (省略可)
   */
  title?: string;
  /**
   * ページのコンテンツ
   */
  children: React.ReactNode;
}

/**
 * ページのコンテンツをラップするコンテナコンポーネント
 */
const PageContainer: React.FC<PageContainerProps> = (props) => (
  <Container
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      pt: { xs: 2, sm: 3, md: 4 },
      pb: { xs: 4, sm: 5, md: 6 },
      px: { xs: 0, sm: 3, md: 4 },
    }}
  >
    {!!props.title && <Typography variant="h4">{props.title}</Typography>}
    {props.children}
  </Container>
);

export default PageContainer;
