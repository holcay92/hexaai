import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchLogos } from "@/utils/fetchLogo";

interface Logo {
  id: number;
  name: string;
  image: string;
}

interface LogoContextType {
  logoData: Logo[];
  loading: boolean;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [logoData, setLogoData] = useState<Logo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLogos = async () => {
      const logos = await fetchLogos();
      setLogoData(logos);
      setLoading(false);
    };

    getLogos();
  }, []);

  return (
    <LogoContext.Provider value={{ logoData, loading }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
