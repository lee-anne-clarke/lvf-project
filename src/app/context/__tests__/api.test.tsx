const fetchUrl = "https://openlibrary.org/subjects/interior_design.json";
const config = {
  format: "json",
  details: false,
  limit: 12
}

// Fetch the book list data
const fetchData = async (url:string, config:object) => {
  try {
    const response = await fetch(fetchUrl, config);

    if (!response.ok) {
      throw new Error(`Request failed. Status code: ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Test
describe("fetchData", () => {
 beforeEach(() => {
   global.fetch = jest.fn();
 });

 afterEach(() => {
   jest.restoreAllMocks();
 });

 it("should fetch data successfully", async () => {
   fetch.mockResolvedValue({
     json: () => Promise.resolve({ data: "mocked data" }),
     ok: true,
     status: 200,
   });

   const result = await fetchData(fetchUrl, config);
   expect(result).toEqual({ data: "mocked data" });
   expect(fetch).toHaveBeenCalledTimes(1);
 });

 it("should handle errors during fetch", async () => {
   fetch.mockResolvedValue({
     ok: false,
     status: 404,
   });
   await expect(fetchData(fetchUrl, config)).rejects.toThrow("Request failed. Status code: 404");
 });
});

