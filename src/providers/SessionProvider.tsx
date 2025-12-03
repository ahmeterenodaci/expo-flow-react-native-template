import { createContext, use, useCallback, type PropsWithChildren } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import useUserStore from "@/store/user";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<{ type: string; message: string }>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => Promise.resolve({ type: "error", message: "Not implemented" }),
  signOut: () => {},
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const { setUser } = useUserStore();

  const signIn = useCallback(
    async (email: string, password: string) => {
      // Here you would normally call your authentication API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (password === "123") {
        setUser({ name: "John Doe", email: email, id: "1" });
        setSession("1");
        return { type: "success", message: "" };
      }

      return { type: "error", message: "Wrong password or username." };
    },
    [setSession, setUser]
  );

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
