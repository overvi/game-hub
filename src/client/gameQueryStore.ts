import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }


 interface GameQueryStore {
    gameQuery : GameQuery;
    setPlatformId : (platformId : number) => void;
    setGenreId : (GenreId: number) => void;
    setSortOrder : (sortOrder : string) => void;
    setSearchText : (searchText: string) => void;
  }

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery : {},
    setSearchText : searchText => set(() => ({gameQuery : {searchText} })),
    setGenreId : genreId => set((store) => ({gameQuery : {...store.gameQuery , genreId}})),
    setPlatformId : platformId => set((platform) => ({gameQuery : {...platform.gameQuery , platformId}})),
    setSortOrder : sortOrder => set((store) => ({gameQuery : {...store.gameQuery , sortOrder }}))

}))

export default useGameQueryStore;