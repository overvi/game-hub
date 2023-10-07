import genres from "../data/genres";

const useGenre = (id? : number) => {
        return genres.results.find((genre) => genre.id == id)?.name
}

export default useGenre;