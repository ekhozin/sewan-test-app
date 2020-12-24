const selectCharactersState = (state) => state.characters;

const selectCharacter = (state) => selectCharactersState(state).character;

const selectIsCharacterLoading = (state) => selectCharactersState(state).isLoading;

export { selectCharacter, selectCharactersState, selectIsCharacterLoading };
