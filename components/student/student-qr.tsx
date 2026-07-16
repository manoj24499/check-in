import QRCode from "qrcode";

interface StudentQRProps {
  value: string;
}

export async function StudentQR({ value }: StudentQRProps) {
  const qr = await QRCode.toDataURL(value);

  return (
    <img
      src={qr}
      alt="Student QR Code"
      className="w-56 h-56 border rounded-lg"
    />
  );
}
