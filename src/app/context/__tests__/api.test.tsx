// Fetch the book list data
const config = {
  format: "json",
  details: false,
  limit: 12
}

const fetchData = async () => {
  try {
    const response = await fetch("https://openlibrary.org/subjects/interior_design.json", { config });

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

   const result = await fetchData();
   expect(result).toEqual({ data: "mocked data" });
   expect(fetch).toHaveBeenCalledTimes(1);
 });

 it("should handle errors during fetch", async () => {
   fetch.mockResolvedValue({
     ok: false,
     status: 404,
   });
   await expect(fetchData()).rejects.toThrow("Request failed. Status code: 404");
 });
});