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
    }}
  >
    {!!props.title && <Typography variant="h4">{props.title}</Typography>}
    {props.children}
  </Container>
);

export default PageContainer;
