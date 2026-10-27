import type { Metadata } from "next";
import { QuoteArchiveAdmin } from "@/components/QuoteArchiveAdmin";
export const metadata:Metadata={title:"Private quote photo archive",robots:{index:false,follow:false}};
export default function Page(){return <QuoteArchiveAdmin/>;}
