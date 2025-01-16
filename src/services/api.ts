const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzE2Zjc5ODY3MjE0ODUxMzhlMGRkNDgyYTkyZDQyOSIsIm5iZiI6MTczNjUyNTk2Ny4wMTEwMDAyLCJzdWIiOiI2NzgxNDg4ZmVkNjc5ZTUzZjg3YjM0YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bjDpuifyb8SplhiRZkfzhzYeLCPIObO74oQgA5OlSFE";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};

export const searchMovies = async (query: string) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
            options
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('JSON Response:', JSON.stringify(data, null, 2));
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
};
export const searchMovieById = async (movieId: string) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}`,
            options
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('JSON Response:', JSON.stringify(data, null, 2));

        return data;  // returnăm direct data, nu data.results
    } catch (error) {
        console.error("Error searching movies by id:", error);
        throw error;
    }
};