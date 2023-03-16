import { QRCodeSVG } from "qrcode.react";
import { useSearchParams } from "react-router-dom";

export default function QR() {
  const [searchParams] = useSearchParams();
  let data = Object.fromEntries([...searchParams]);

  return (
    <QRCodeSVG
      value={atob(data.data) || "qr.lonelil.dev"}
      size={Number(data.size) || 128}
      bgColor={data.bgColor || "#FFFFFF"}
      fgColor={data.fgColor || "#000000"}
      level={data.level || "L"}
      imageSettings={{
        src: data.imageSrc || "",
        x: Number(data.imageX) || undefined,
        y: Number(data.imageY) || undefined,
        height: Number(data.imageHeight) || 24,
        width: Number(data.imageWidth) || 24,
        excavate: data.imageSrc ? true : false,
      }}
    />
  );
}
