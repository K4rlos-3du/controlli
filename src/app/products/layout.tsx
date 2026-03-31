import { Header } from "@/components/header";

export default function ProductsLayout({children}: {children: React.ReactNode}) {

  return(
    <>
      <Header/>
      {children}
    </>

  );
  
}