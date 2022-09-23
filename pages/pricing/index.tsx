import { MainLayouts } from "../../components/Layouts/Main";

export default function Pricing() {
  return (
    <MainLayouts>
      <h1 className={"title"}>
        <span>Pricing</span> Page
      </h1>

      <p className={"description"}>
        You&apos;re here:{" "}
        <code className={"code"}>pages/pricing/index.tsx</code>
      </p>
    </MainLayouts>
  );
}
