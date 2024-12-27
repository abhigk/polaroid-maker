import './global.css'
import { outfit } from '@/components/ui/font'

export const metadata = {
  title: 'Polaroid Uploader',
  description: 'Create and download polaroid-style images',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap' rel='stylesheet' />
      </head>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  )
}
