"use client";

import ErrorBoundary from "next/dist/client/components/error-boundary";
import React from "react";
import { RecoilRoot, atom } from "recoil";


export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>
    
            {children}
        
  </RecoilRoot>;
}