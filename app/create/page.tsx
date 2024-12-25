import PolaroidUploader from "@/components/PolaroidUploader";
export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Polaroid Image Uploader
      </h1>
      <PolaroidUploader />
    </main>
  );
}
