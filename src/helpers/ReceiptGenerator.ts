class ReceiptGenerator {

    readonly characters = 42
    private data = ''

    /**
    * Insert one of more blank lines
    */
    blank(blanks = 1): ReceiptGenerator {
        this.data += `${' '.repeat(this.characters)}\n`.repeat(blanks)
        return this
    }

    /**
    * Align the string to the left
    */
    left(text: string): ReceiptGenerator {
        const blanks = this.characters - text.length
        this.data += `${text}${' '.repeat(blanks)}\n`
        return this
    }

    /**
    * Align the string to the right
    */
    right(text: string): ReceiptGenerator {
        const blanks = this.characters - text.length
        this.data += `${' '.repeat(blanks)}${text}\n`
        return this
    }

    /**
    * Left and Right with white space to fill in the middle
    */
    stretch(left: string, right: string, symbol = ' '): ReceiptGenerator {
        const blanks = this.characters - (left.length + right.length)
        this.data += `${left}${symbol.repeat(blanks)}${right}\n`
        return this
    }

    /**
    * Center the string
    */
    centre(text: string): ReceiptGenerator {
        const blanks = this.characters - text.length
        this.data += `${' '.repeat(Math.floor(blanks / 2))}${text}${' '.repeat(Math.floor(blanks / 2))}\n`
        return this
    }

    /**
    * Fill the line with the character provided
    */
    fill(text: string): ReceiptGenerator {
        this.data += `${text.repeat(this.characters)}\n`
        return this
    }

    /**
    * Inject multiple lines. Can be used to run a new ReceiptGenerator class for a list of items. Inject the string produced into position
    */
    inject(lines: string): ReceiptGenerator {
        this.data += lines
        return this
    }

    /**
    * Return the generated receipt data
    */
    generate(tail = true): string {
        if (tail) this.data += `${' '.repeat(this.characters)}\n`.repeat(6) // add a tail (cutoff)
        return this.data
    }

}

export default ReceiptGenerator