describe('Note', () => {
    let note = new Note();
    
    describe('.showText', () => {
        it('shows text', () => {
            expect(note.showText()).toBe('')
        })

        it ('returns text as string', () => {
            expect(typeof note.showText()).toBe('string')
        })
    });
    describe('.updateText', () => {
        it('updates the text', () => {
            note.updateText('test')
            expect(note.showText()).toBe('test');
        })
    });
})
