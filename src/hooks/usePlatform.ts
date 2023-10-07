import platforms from "../data/platforms"

const usePlatform = (id? : number) => {
        return platforms.results.find((platform) => platform.id == id)?.name
}

export default usePlatform;