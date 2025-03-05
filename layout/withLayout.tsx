import { FC, JSX } from "react";
import { AppContextProvider, IAppContext } from "@/context/app.context";
import { Layout } from "./Layout";

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
      const { menu, firstCategory } = props;

      return (
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
          <Layout>
            <Component {...props}/>
          </Layout>
        </AppContextProvider>
      );
    };
  };
  