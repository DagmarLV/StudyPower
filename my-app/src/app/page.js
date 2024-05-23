import Image from "next/image";
import Sidebar from './Sidebar';
import Main from './Main';
export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
        <Sidebar />
         
            <Main />
        
    </div>
  );
}