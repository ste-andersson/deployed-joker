import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("@clerk/clerk-react", () => ({
  useAuth: () => ({
    getToken: async () => "fake-token",
  }),
  SignedIn: ({ children }: any) => <>{children}</>,
  SignedOut: ({ children }: any) => <>{children}</>,
  SignInButton: () => <button>Sign in</button>,
  SignUpButton: () => <button>Sign up</button>,
  UserButton: () => <div>User</div>,
}));

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("shows 'This is text'", () => {
    render(<App />);
    expect(screen.getByText(/This is text/i)).toBeInTheDocument();
  });
});
