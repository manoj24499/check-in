"use client";

import { Scanner } from "@yudiel/react-qr-scanner";

export function QRScanner() {
  return (
    <div className="max-w-lg mx-auto">
      <Scanner
        onScan={(result) => {
          console.log(result);
        }}
        onError={(error) => {
          console.error(error);
        }}
      />
    </div>
  );
}
