import { QRScanner } from "@/components/attendance/qr-scanner";

export default function TeacherScanPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Scan Student QR</h1>

      <QRScanner />
    </div>
  );
}
