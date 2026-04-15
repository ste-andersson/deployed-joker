import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { useState } from "react";

type ApiResponse = string;

function App() {
  const { getToken } = useAuth();
  const [response, setResponse] = useState<ApiResponse>("");

  const callBackend = async (): Promise<void> => {
    try {
      const token: string | null = await getToken();

      if (!token) {
        setResponse("No authentication token available");
        return;
      }

      const res: Response = await fetch("http://localhost:8080/api/jokes", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        setResponse(`Error: ${res.status} ${res.statusText}`);
        return;
      }

      const data: string = await res.text();
      setResponse(data);
    } catch (error: unknown) {
      setResponse("Request failed");
    }
  };

  return (
    <div>
      <h1>Hello welcome</h1>
      <header style={{ display: "flex", gap: "10px" }}>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <main style={{ marginTop: "20px" }}>
        <SignedIn>
          <button onClick={callBackend}>Call Spring Boot API</button>

          <pre>{response}</pre>
        </SignedIn>

        <SignedOut>
          <p>Please sign in to access the API.</p>
        </SignedOut>
        <p>This is text</p>
      </main>
    </div>
  );
}

export default App;
