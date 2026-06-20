import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Angel Number — Decode the numbers you keep seeing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1f3a 50%, #3a2530 100%)',
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px',
      }}>
        <div style={{ fontSize: 72, fontWeight: 400, color: '#e8d8e0', textAlign: 'center' }}>
          ✦ 111 ✦ 444 ✦ 777 ✦
        </div>
        <div style={{ fontSize: 36, color: '#d97757', textAlign: 'center', marginTop: 20 }}>
          Angel Number
        </div>
        <div style={{ fontSize: 22, color: '#8a7a85', textAlign: 'center', marginTop: 12 }}>
          Decode the numbers you keep seeing
        </div>
        <div style={{ fontSize: 16, color: '#6b5b63', textAlign: 'center', marginTop: 40 }}>
          angelnumber.space
        </div>
      </div>
    ),
    size
  )
}
