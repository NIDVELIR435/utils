class Emoji {
    private emojiRegex = /\p{Emoji}/ug;
    private readonly value: string = "";
    public hasEmojis = false;
    private _emojis = [];
    private _formatted: string = null;

    constructor(value: string) {
        this.value = value ?? "";
        this.test();
    }

    public removeEmojis(): string | null {
        if (this.hasEmojis && !this._formatted)
            this._formatted = this.value.replace(this.emojiRegex, "");

        return this._formatted;
    }

    public findEmojis(): string[] {
        if (this.hasEmojis && this._emojis.length === 0)
            this._emojis = this.value.match(this.emojiRegex) ?? [];

        return this._emojis;
    }

    private test(): void {
        this.hasEmojis = this.emojiRegex.test(this.value);
    }
}

const emoji = new Emoji("thumbs-up👍🪚 for staying strong💪 without emoji please🙏");

console.log({
    hasEmojis: emoji.hasEmojis,
    emojis: emoji.findEmojis(),
    formatted: emoji.removeEmojis()
});

