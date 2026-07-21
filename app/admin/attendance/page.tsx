import { QRScanner } from "@/components/attendance/qr-scanner";

export default function ScanPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Scan Student QR</h1>

      <QRScanner />
    </div>
  );
}
