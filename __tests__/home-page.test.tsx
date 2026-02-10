import { renderToString } from "react-dom/server";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders resume-aligned sections", () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => undefined);

    const html = renderToString(<HomePage />);

    errorSpy.mockRestore();

    expect(html).toContain("Melam Chaitanya Kumar builds secure, observable delivery platforms");
    expect(html).toContain("Production DevOps leadership");
    expect(html).toContain("Resume-aligned initiatives");
    expect(html).toContain("Resume skill matrix");
    expect(html).toContain("Industry-recognized expertise");
    expect(html).toContain("Continuous learning anchored in engineering rigor");
    expect(html).toContain("Sharing DevOps playbooks");
  });
});
