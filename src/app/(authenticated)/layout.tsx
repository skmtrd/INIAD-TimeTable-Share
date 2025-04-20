import { SiteHeader } from "@/components/common/SiteHeader";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// MUIのテーマを設定
// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#9c27b0",
//     },
//   },
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
//   components: {
//     MuiAppBar: {
//       defaultProps: {
//         color: "default",
//       },
//       styleOverrides: {
//         root: {
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//         },
//       },
//     },
//   },
// });

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = (props) => (
  // <ThemeProvider theme={theme}>
  <main className="flex min-h-screen w-full flex-col">
    <SiteHeader />
    <div className="flex-1">{props.children}</div>
  </main>
  // </ThemeProvider>
);

export default Layout;
