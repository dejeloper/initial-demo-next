import { Dark } from "../components/Layouts/Dark";
import { MainLayouts } from "../components/Layouts/Main";

export default function Home() {
  return (
    <>
      <h1 className={"title"}>
        <span>Home</span> Page
      </h1>

      <p className={"description"}>
        You&apos;re here: <code className={"code"}>pages/index.tsx</code>
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element | JSX.Element[]) {
  return <MainLayouts>{page}</MainLayouts>;
};
