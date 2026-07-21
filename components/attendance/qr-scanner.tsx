"use client";

import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { scanAttendance } from "@/actions/attendance/scan";

export function QRScanner() {
  const [message, setMessage] = useState("");
  const [isScanning, setIsScanning] = useState(true);

  async function handleScan(results: any) {
    if (!results.length || !isScanning) return;

    setIsScanning(false);

    const qrCode = results[0].rawValue;

    const result = await scanAttendance(qrCode);

    setMessage(result.message);

    // Allow scanning again after 3 seconds
    setTimeout(() => {
      setMessage("");
      setIsScanning(true);
    }, 3000);
  }

  return (
    <div className="space-y-4">
      <Scanner onScan={handleScan} />

      {message && (
        <div
          className={`p-4 rounded-lg text-center font-semibold ${
            message.includes("successfully")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
