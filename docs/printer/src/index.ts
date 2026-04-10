import { log } from './../../common'
import Evexi from 'evexi'

window.playing = (item) => {
  log.info('playing item ...' + JSON.stringify(item))
  try {
    Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')
    if (Evexi) log.info('')
  } catch (e) {
    log.error('API ERROR - caught')
  }
}

const getText = (): string => {
  return (document.getElementById('textarea') as HTMLTextAreaElement)?.value || 'Hello World!'
}

const getStyles = () => {
  const fontSize = parseInt((document.getElementById('fontSize') as HTMLSelectElement)?.value || '2')
  const fontWeight = (document.getElementById('fontWeight') as HTMLSelectElement)?.value as 'normal' | 'bold'
  const underline = (document.getElementById('underline') as HTMLInputElement)?.checked || false
  return { fontSize, fontWeight, underline }
}

const getAlignment = (): 'left' | 'center' | 'right' => {
  return (document.getElementById('alignment') as HTMLSelectElement)?.value as 'left' | 'center' | 'right' || 'left'
}

const getQrUrl = (): string => {
  return (document.getElementById('qrUrl') as HTMLInputElement)?.value || 'https://evexi.com'
}

const getQrSize = (): number => {
  return parseInt((document.getElementById('qrSize') as HTMLSelectElement)?.value || '3')
}

const getLogoUrl = async (): Promise<string> => {
  const url = (document.getElementById('logoUrl') as HTMLInputElement)?.value || 'data:image/png;base64,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'
  const isBase64 = url.startsWith('data:image')
  if (isBase64) return url

  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = url

  return new Promise<string>((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        const dataUrl = canvas.toDataURL('image/png')
        resolve(dataUrl)
      } else {
        reject(new Error('Could not get canvas context'))
      }
    }
    img.onerror = (e) => {
      reject(new Error('Could not load image: ' + url))
    }
  })
}

const doPrint = async (buffer: Buffer, label: string) => {
  try {
    Evexi.printer ? log.success('Printer API Found') : log.error('Printer API ERROR - does not exist')
    log.info(` -- PRINTING: ${label} -- `)
    const res = await Evexi.printer.print(buffer)
    if (res) log.success(`${label}: resolved ${JSON.stringify(res)}`)
    else log.error(`${label}: false`)
  } catch (e) {
    log.error(`${label}: caught error`)
    console.error(e)
  }
}

// @ts-ignore
window.printStyled = async () => {
  const text = getText()
  const styles = getStyles()
  const alignment = getAlignment()

  const receiptGen = new Evexi.helper.starReceiptGenerator()

  switch (alignment) {
    case 'left':
      receiptGen.left(text, styles)
      break
    case 'center':
      receiptGen.center(text, styles)
      break
    case 'right':
      receiptGen.right(text, styles)
      break
  }

  const buffer = receiptGen.build()
  await doPrint(buffer, `Styled Text (${alignment}, size:${styles.fontSize}, weight:${styles.fontWeight}, underline:${styles.underline})`)
}

// @ts-ignore
window.printLeft = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator().left(text).build()
  await doPrint(buffer, 'Left Aligned')
}

// @ts-ignore
window.printCenter = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator().center(text).build()
  await doPrint(buffer, 'Center Aligned')
}

// @ts-ignore
window.printRight = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator().right(text).build()
  await doPrint(buffer, 'Right Aligned')
}

// @ts-ignore
window.printAllAlignments = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator()
    .left(`Left: ${text}`)
    .blank(1)
    .center(`Center: ${text}`)
    .blank(1)
    .right(`Right: ${text}`)
    .build()
  await doPrint(buffer, 'All Alignments')
}

// @ts-ignore
window.printQR = async () => {
  const url = getQrUrl()
  const size = getQrSize()
  const buffer = new Evexi.helper.starReceiptGenerator()
    .qrCode(url, size)
    .build()
  await doPrint(buffer, `QR Code (${url}, size: ${size})`)
}

// @ts-ignore
window.printQRWithText = async () => {
  const url = getQrUrl()
  const size = getQrSize()
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator()
    .center('Scan the QR Code', { fontSize: 2, fontWeight: 'bold' })
    .blank(1)
    .qrCode(url, size)
    .blank(1)
    .center(text)
    .build()
  await doPrint(buffer, `QR Code with Text`)
}

// @ts-ignore
window.printLogo = async () => {
  const url = await getLogoUrl()
  const generator = new Evexi.helper.starReceiptGenerator()
  const withLogo = await generator.image(url)
  const buffer = withLogo.build()
  await doPrint(buffer, `Logo`)
}

// @ts-ignore
window.printLogoWithText = async () => {
  const url = await getLogoUrl()
  const text = getText()
  const generator = new Evexi.helper.starReceiptGenerator()

  await generator.image(url)

  const buffer = generator
    .blank(1)
    .center(text, { fontSize: 2 })
    .build()
  await doPrint(buffer, `Logo with Text`)
}

// @ts-ignore
window.printReceipt = async () => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date())
  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date())
  const items = [
    { name: 'Item 1', price: '$10.00', quantity: 1, modifiers: ['Add Cherries', 'Option 1'] },
    { name: 'Item 2', price: '$4.00', quantity: 3, modifiers: ['Add Blueberries'] },
    { name: 'Item 3', price: '$5.00', quantity: 2, modifiers: [] },
    { name: 'Item 4', price: '$2.00', quantity: 5, modifiers: ['Option 3'] },
  ]
  const dateTimeString = `Date: ${formattedDate} ${formattedTime}`
  const url = await getLogoUrl()
  const generator = new Evexi.helper.starReceiptGenerator()
  const withLogo = await generator.image(url)
  withLogo
    .blank(1)
    .center('Order Number', { fontSize: 1.5 })
    .center('#7719', { fontSize: 2, fontWeight: 'bold' })
    .blank(1)
    .right(dateTimeString, { fontSize: 1 })
    .right(`Payment ID: 123`, { fontSize: 1 })
    .blank(1)
    .center('PURCHASE ITEMS', { fontSize: 1, fontWeight: 'bold', underline: true })

  items.forEach(item => {
    withLogo.stretch({
      content: item.name,
    }, {
      content: `(${item.quantity}) ${item.price}`,
    })

    if (item.modifiers && item.modifiers.length > 0) {
      item.modifiers.forEach(modifier => {
        withLogo.left(`  - ${modifier}`, { fontSize: 1 })
      })
    }
  })

  const buffer = withLogo
    .blank(1)
    .left('--------------------------------')
    .left('Total:', { fontWeight: 'bold' })
    .right('$30.00', { fontWeight: 'bold' })
    .blank(2)
    .center('Thank you for your purchase!', { fontSize: 1 })
    .blank(1)
    .center('Scan for more info:')
    .qrCode(getQrUrl(), getQrSize())
    .blank(3)
    .build()
  await doPrint(buffer, 'Full Receipt')
}

// @ts-ignore
window.printBlankLines = async (lines: number) => {
  const buffer = new Evexi.helper.starReceiptGenerator()
    .blank(lines)
    .build()
  await doPrint(buffer, 'Blank Lines')
}

// @ts-ignore
window.bigText = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator()
    .left(text, { fontSize: 3, fontWeight: 'bold', underline: true })
    .build()
  await doPrint(buffer, 'Big Bold Text')
}

// @ts-ignore
window.smallText = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator()
    .left(text, { fontSize: 1 })
    .build()
  await doPrint(buffer, 'Small Text')
}

// @ts-ignore
window.underlinedText = async () => {
  const text = getText()
  const buffer = new Evexi.helper.starReceiptGenerator()
    .center(text, { fontSize: 2, underline: true })
    .build()
  await doPrint(buffer, 'Underlined Text')
}

// @ts-ignore
window.blankSpace = async () => {
  const buffer = new Evexi.helper.starReceiptGenerator()
    .blank(5)
    .build()
  await doPrint(buffer, 'Blank Space')
}
