import { MainLayouts } from "../../components/Layouts/Main";

export default function Contact() {
  return (
    <MainLayouts>
      <h1 className={"title"}>
        <span>Contact</span> Page
      </h1>

      <p className={"description"}>
        You&apos;re here:{" "}
        <code className={"code"}>pages/contact/index.tsx</code>
      </p>
    </MainLayouts>
  );
}
