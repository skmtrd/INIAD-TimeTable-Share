import { Container } from "@mui/material";

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
  <Container sx={{ mb: 6 }}>
    {!!props.title && <h1>{props.title}</h1>}
    {props.children}
  </Container>
);

export default PageContainer;
