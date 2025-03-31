import { Htag } from "@/components";
import { withLayout } from "@/layout/withLayout";
import { JSX } from "react";

 function ServerError500(): JSX.Element {

  return (
    <>
      <Htag tag="h1">Ошибка 500 все очень плохо...</Htag>
    </>
  );
}

export default withLayout(ServerError500);