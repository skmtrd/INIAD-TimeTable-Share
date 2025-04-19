"use client";

import { Button } from "@/components/ui/button";
import { GrGoogle } from "react-icons/gr";
import React from "react";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  async function handleGoogleSignIn() {
    // Google oauth
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to sign in with Google");
    } finally {
    }
  }
  return (
    <div className="mx-auto max-w-sm space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">ログイン</h1>
        <p className="text-muted-foreground">
          ソーシャルアカウントでログインしてください
        </p>
      </div>
      <Button
        variant="outline"
        className="w-full flex items-center justify-evenly"
        onClick={handleGoogleSignIn}
      >
        <GrGoogle />
        Googleでログイン
      </Button>
    </div>
  );
};

export default LoginForm;
