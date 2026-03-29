"use client";

import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

export default function useAuthContext() {
  return useContext(AuthContext);
}