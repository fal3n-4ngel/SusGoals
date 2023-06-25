import SusGoal from "@/components/SusGoal/SusGoal";
import WorldCount from "@/components/WorldCount/WorldCount";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center m-auto">
      <WorldCount />
        
        
        
      </div>
    </main>
  );
}
