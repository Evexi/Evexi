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
  const url = (document.getElementById('logoUrl') as HTMLInputElement)?.value || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAv1QTFRFAAAA/////////////////////////////////////////////////////////////////////v7+/////////////////////////////////////////////////////////////////////////////////////////v7+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v7+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v7+/////////////v7+/////////////////////////////////////v7+/////////////////////////////////////////////////////////////////////////////////////////////v7+/////////////////////////////////////////////////////v7+/////////////v7+/////////////////////////v7+/////v7+/////////////////////////////////////////////////////////////////////////////////////////////v7+/////v7+/v7+////////1BS/AgAAAP90Uk5TAEAqDJm/ATXl/CwDgf+qDrckId2yMvD+M0j3zk/4XUX59As7qfNCFOAHBca2lFlL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'
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

  const receiptGen = new Evexi.helper.richReceiptGenerator()

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
  const buffer = new Evexi.helper.richReceiptGenerator().left(text).build()
  await doPrint(buffer, 'Left Aligned')
}

// @ts-ignore
window.printCenter = async () => {
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator().center(text).build()
  await doPrint(buffer, 'Center Aligned')
}

// @ts-ignore
window.printRight = async () => {
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator().right(text).build()
  await doPrint(buffer, 'Right Aligned')
}

// @ts-ignore
window.printAllAlignments = async () => {
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator()
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
  const buffer = new Evexi.helper.richReceiptGenerator()
    .qrCode(url, size)
    .build()
  await doPrint(buffer, `QR Code (${url}, size: ${size})`)
}

// @ts-ignore
window.printQRWithText = async () => {
  const url = getQrUrl()
  const size = getQrSize()
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator()
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
  const generator = new Evexi.helper.richReceiptGenerator()
  const withLogo = await generator.logo(url)
  const buffer = withLogo.build()
  await doPrint(buffer, `Logo`)
}

// @ts-ignore
window.printLogoWithText = async () => {
  const url = await getLogoUrl()
  const text = getText()
  const generator = new Evexi.helper.richReceiptGenerator()
  const withLogo = await generator.logo(url)
  const buffer = withLogo
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
  const generator = new Evexi.helper.richReceiptGenerator()
  const withLogo = await generator.logo(url)
  withLogo
    .blank(1)
    .center('Order Number', { fontSize: 1.5 })
    .center('#7719', { fontSize: 2, fontWeight: 'bold' })
    .blank(1)
    .right(dateTimeString, { fontSize: 1 })
    .right(`Payment ID: 123`, { fontSize: 1 })
    .blank(1)
    .center('PURCHASE ITEMS', { fontSize: 1, fontWeight: 'bold', underline: true })

  // Print each item using stretch for name and quantity/price alignment
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
window.printBlankLines = async () => {
  const buffer = new Evexi.helper.richReceiptGenerator()
    .center('--- Before Blank ---')
    .blank(3)
    .center('--- After Blank ---')
    .build()
  await doPrint(buffer, 'Blank Lines')
}

// @ts-ignore
window.bigText = async () => {
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator()
    .left(text, { fontSize: 3, fontWeight: 'bold', underline: true })
    .build()
  await doPrint(buffer, 'Big Bold Text')
}

// @ts-ignore
window.smallText = async () => {
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator()
    .left(text, { fontSize: 1 })
    .build()
  await doPrint(buffer, 'Small Text')
}

// @ts-ignore
window.underlinedText = async () => {
  const text = getText()
  const buffer = new Evexi.helper.richReceiptGenerator()
    .center(text, { fontSize: 2, underline: true })
    .build()
  await doPrint(buffer, 'Underlined Text')
}

// @ts-ignore
window.blankSpace = async () => {
  const buffer = new Evexi.helper.richReceiptGenerator()
    .blank(5)
    .build()
  await doPrint(buffer, 'Blank Space')
}
