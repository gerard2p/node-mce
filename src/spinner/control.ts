export class Cursor {
    static hidden = false
    static showOnExit = false
    static show (stream: any) {

		const s = stream || /*istanbul ignore next*/ process.stderr
		/*istanbul ignore next*/
        if (!s.isTTY) {
            return
        }
        Cursor.hidden = false
        s.write('\u001b[?25h')
    }
    static hide(stream: any) {
		const s = stream || /*istanbul ignore next*/process.stderr
		/*istanbul ignore next*/
        if (!s.isTTY) {
            return
        }
        if(!Cursor.showOnExit) {
			Cursor.showOnExit = true
			/*istanbul ignore next*/
			process.once('beforeExit', () => {
				process.stderr.write('\u001b[?25h')
			})
        }
        Cursor.hidden = true
        s.write('\u001b[?25l')
    }
}